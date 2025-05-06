import { Skeleton } from "@/components/ui/skeleton";

export default function IframeLoader() {
  return (
    <div className='mx-auto size-full max-w-lg space-y-8 overflow-y-scroll p-2'>
      <div className='flex items-center justify-between'>
        <Skeleton className='bg-muted-foreground rounded-base h-[30px] w-[200px]' />
        <div className='flex items-center gap-3'>
          <Skeleton className='bg-muted-foreground size-[30px] rounded-full' />
          <Skeleton className='bg-muted-foreground size-[30px] rounded-full' />
        </div>
      </div>
      <ul className='space-y-2'>
        <Skeleton className='bg-muted-foreground rounded-base h-[100px] w-full' />
        <Skeleton className='bg-muted-foreground rounded-base h-[100px] w-full' />
        <Skeleton className='bg-muted-foreground rounded-base h-[100px] w-full' />
      </ul>
    </div>
  );
}
