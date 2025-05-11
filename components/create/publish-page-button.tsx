"use client";

import { useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Check, Copy, Send, Share2 } from "lucide-react";
import { useData } from "@/providers/data-provider";
import { isEmptyValues, catchError } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function PublishPage() {
  const { data, savePageData } = useData();
  const { data: session } = useSession();
  const [hasCopied, setHasCopied] = useState(false);
  const [inputLink, setInputLink] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isEmpty = isEmptyValues(data);

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

  const handlePublish = async () => {
    setHasCopied(false);

    if (!session?.user?.id) {
      toast.error("You must be signed in to save your page.");
      return;
    }

    if (isEmpty) {
      toast.error("Cannot save with empty fields.");
      return;
    }

    const result = await savePageData();
    if (result === true) {
      const generatedLink = generateUrlEndpoint();
      setInputLink(generatedLink);
      setIsDialogOpen(true);
    } else if (result && typeof result === "object" && "error" in result) {
      toast.error(result.error);
    } else {
      toast.error("Failed to save data. Please try again.");
    }
  };

  const handleShare = async () => {
    if (!inputLink) {
      const generatedLink = await copyToClipboard();
      if (generatedLink) setInputLink(generatedLink);
      else return;
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
      const fallbackLink = await copyToClipboard();
      if (fallbackLink) {
        setInputLink(fallbackLink);
        setHasCopied(true);
      }
    }
  };

  return (
    <>
      <Button variant='fun' className='w-full' onClick={handlePublish}>
        <Send className='mr-0.5' />
        Publish Page
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='flex flex-col sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle className='flex items-center'>
              Share your page
            </DialogTitle>
            <DialogDescription className='text-left'>
              Your page has been saved! Share the link below.
            </DialogDescription>
          </DialogHeader>

          <Input type='text' value={inputLink} readOnly autoFocus={false} />

          <DialogFooter>
            <div className='flex w-full flex-col items-center gap-3'>
              <Button
                variant='fun'
                className='w-full'
                onClick={handleShare}
                disabled={!inputLink}
              >
                <Share2 className='mr-0.5' />
                Share
              </Button>
              <Button
                variant='fun'
                className='w-full'
                onClick={async () => {
                  const copiedLink = await copyToClipboard();
                  if (copiedLink) {
                    setInputLink(copiedLink);
                    setHasCopied(true);
                  }
                }}
                disabled={!inputLink}
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
        </DialogContent>
      </Dialog>
    </>
  );
}
