import BrandLogo from "@/components/brand-logo";

export default function UsersProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='mb-[10vh] flex-1'>{children}</main>
      <BrandLogo
        className='fixed inset-x-0 bottom-0 mx-auto w-full justify-center py-2 text-xs backdrop-blur-xs'
        height={16}
        width={16}
      />
    </>
  );
}
