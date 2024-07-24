import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1 flex items-center md:gap-2">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={50}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="mr-2 md:hidden"
        />
        <h2 className="md:text-2xl font-semibold">CloudWrite</h2>
      </Link>
      {children}
    </div>
  );
};

export default Header;
