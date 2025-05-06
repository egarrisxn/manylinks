import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className='relative grid h-screen px-2 md:container lg:grid-cols-3 lg:px-0'>
      <section className='flex h-screen flex-col items-center justify-center gap-6 py-6 lg:col-span-2 lg:px-20'>
        <div className='flex w-full flex-col gap-5 overflow-y-auto pb-20 lg:pb-0'>
          <Skeleton className='rounded-base h-[250px] w-full' />
          <Skeleton className='rounded-base h-[250px] w-full' />
          <Skeleton className='rounded-base h-[250px] w-full' />
        </div>
      </section>
      <section className='hidden items-center pl-6 lg:flex'>
        <Skeleton className='rounded-base h-[700px] w-[350px]' />
      </section>
    </div>
  );
}
