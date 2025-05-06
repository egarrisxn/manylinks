"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";
import { Check, Copy, Send, Share2 } from "lucide-react";
import { isEmptyValues } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PublishPage() {
  const { data } = useData();
  const { data: session } = useSession();
  const isEmpty = isEmptyValues(data);
  const [inputLink, setInputLink] = useState<string>("");
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const generateUrlEndpoint = useCallback(() => {
    return `${window.location.origin}/${data.u || session?.user?.id}`;
  }, [data.u, session?.user?.id]);

  const copyToClipboard = useCallback(async () => {
    try {
      const url = generateUrlEndpoint();
      await navigator.clipboard.writeText(url);
      return url;
    } catch (error) {
      console.error("Failed to copy to clipboard", error);
      toast.error("Failed to copy link to clipboard");
      return null;
    }
  }, [generateUrlEndpoint]);

  useEffect(() => {
    setHasCopied(false);
  }, [data]);

  const publishToDatabase = async () => {
    if (!session?.user?.id) {
      toast.error("You must be signed in to save your page.");
      return;
    }

    if (!isEmpty) {
      try {
        const response = await fetch("/api/user/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          toast.success("Your page data has been saved!");
          const link = `${window.location.origin}/${data.u}`;
          setInputLink(link);
        } else {
          const errorData = await response.json();
          toast.error(
            errorData?.message || "Failed to save data. Please try again."
          );
        }
      } catch (error) {
        console.error("Error saving data:", error);
        toast.error("An unexpected error occurred while saving.");
      }
    } else {
      toast.error("Cannot save with empty fields.");
    }
  };

  const handleShare = async () => {
    if (!inputLink) {
      const generatedLink = await copyToClipboard();
      if (generatedLink) {
        setInputLink(generatedLink);
      } else {
        return;
      }
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.n || "My"} Links - ManyLinks`,
          text: `Check out my links!`,
          url: inputLink,
        });
      } catch (error) {
        console.error("Error sharing:", error);
        toast.error("Failed to share. Please try again later.");
      }
    } else {
      toast.message("Web Share API is not supported on this browser.");
      await copyToClipboard();
      setHasCopied(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full' onClick={publishToDatabase}>
          <Send className='mr-1' />
          Save & Publish
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='flex items-center'>
            Share your page
          </DialogTitle>
          <DialogDescription className='text-left'>
            Your page has been saved! Share the link below.
          </DialogDescription>
        </DialogHeader>
        {!isEmpty ? (
          <>
            <Input
              type='text'
              value={inputLink || generateUrlEndpoint()}
              readOnly
              autoFocus={false}
            />
            <DialogFooter>
              <div className='flex w-full items-center justify-between gap-3'>
                <Button
                  className='w-full'
                  onClick={handleShare}
                  disabled={!inputLink && isEmpty}
                >
                  <Share2 className='mr-1' />
                  Share
                </Button>
                <Button
                  className='w-full'
                  onClick={async () => {
                    await copyToClipboard();
                    setHasCopied(true);
                  }}
                  disabled={isEmpty}
                >
                  {hasCopied ? (
                    <>
                      <Check className='mr-1' />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className='mr-1' />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </DialogFooter>
          </>
        ) : (
          <DialogClose>
            <Button className='w-full'>
              Can&apos;t publish with empty fields!
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  );
}
