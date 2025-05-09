import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IFrameShell from "./iframe-shell";

export default function IconInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon' id='al' aria-label='icons'>
          <Info className='text-acccent-foreground/90 hover:text-accent-foreground size-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Get icon key</DialogTitle>
          <DialogDescription>
            Find the icon that best matches your link and copy the icon key,
            which looks like this:{" "}
            <code className='bg-acccent rounded-sm border px-1 py-0.5'>
              tabler:brand-bluesky
            </code>
            .
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4'>
          <div>
            <IFrameShell
              src='https://icones.js.org/'
              width='100%'
              height='400'
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
