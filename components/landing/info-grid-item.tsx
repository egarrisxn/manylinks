export function InfoGridItem({
  Icon,
  title,
  description,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className='flex flex-col items-center rounded-lg border bg-white p-4 shadow-md'>
      <div className='mt-4 mb-4'>
        <Icon className='h-16 w-14 text-[#D247BF]' />
      </div>
      <h2 className='mb-2 text-center text-xl font-semibold'>{title}</h2>
      <p className='text-center'>{description}</p>
    </div>
  );
}
