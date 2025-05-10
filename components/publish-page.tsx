"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";
import { Check, Copy, Send, Share2 } from "lucide-react";
import { useData } from "@/providers/data-provider";
import { isEmptyValues, catchError } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function PublishPage() {
  const { data, savePageData } = useData();
  const { data: session } = useSession();
  const isEmpty = isEmptyValues(data);
  const [inputLink, setInputLink] = useState<string>("");
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const generateUrlEndpoint = useCallback(() => {
    return `${window.location.origin}/${data.username || session?.user?.id}`;
  }, [data.username, session?.user?.id]);

  const copyToClipboard = useCallback(async () => {
    try {
      const url = generateUrlEndpoint();
      await navigator.clipboard.writeText(url);
      return url;
    } catch (error) {
      catchError(error);
      return null;
    }
  }, [generateUrlEndpoint]);

  useEffect(() => {
    setHasCopied(false);
  }, [data]);

  const handlePublish = async () => {
    if (!session?.user?.id) {
      toast.error("You must be signed in to save your page.");
      return;
    }

    if (!isEmpty) {
      const result = await savePageData();
      if (result === true) {
        const link = `${window.location.origin}/${data.username}`;
        setInputLink(link);
      } else if (result && typeof result === "object" && "error" in result) {
        toast.error(result.error);
      } else {
        toast.error("Failed to save data. Please try again.");
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
          title: `${data.name || "My"} Links - ManyLinks`,
          text: `Check out my links!`,
          url: inputLink,
        });
      } catch (error) {
        catchError(error);
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
        <Button className='w-full' onClick={handlePublish}>
          <Send className='mr-0.5' />
          Publish Page
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col sm:max-w-[425px]'>
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
              <div className='flex w-full flex-col items-center gap-3'>
                <Button
                  className='w-full border border-white shadow-md'
                  onClick={handleShare}
                  disabled={!inputLink && isEmpty}
                >
                  <Share2 className='mr-0.5' />
                  Share
                </Button>
                <Button
                  className='w-full border border-white shadow-md'
                  onClick={async () => {
                    await copyToClipboard();
                    setHasCopied(true);
                  }}
                  disabled={isEmpty}
                >
                  {hasCopied ? (
                    <>
                      <Check className='mr-0.5' />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className='mr-0.5' />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </DialogFooter>
          </>
        ) : (
          <DialogClose>
            <Button className='w-full border border-white shadow-md'>
              Can&apos;t publish with empty fields!
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  );
}
