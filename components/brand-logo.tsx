import Link from "next/link";
import Image from "next/image";

export default function BrandLogo({
  className,
  height = 24,
  width = 24,
}: {
  className?: string;
  height?: number;
  width?: number;
}) {
  return (
    <Link
      href='/'
      className={`${className} gap-0.3 flex flex-row items-center font-black tracking-tighter`}
    >
      <span>MANY</span>
      <Image src='/icon.svg' alt='logo' height={height} width={width} />
      <span>LINKS</span>
    </Link>
  );
}
