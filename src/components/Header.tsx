import { navLinks } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <header className="sticky top-5 rounded-full z-40 w-19/20 bg-white mx-auto px-4 py-2 text-[#12263F] shadow-xs shadow-black/20">
      <div className="flex justify-between md:items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="EnTech Logo" width={28} height={28} />
          <h1 className="text-sm font-bold">EnTech</h1>
        </Link>
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-4 text-sm md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center space-x-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className=" flex items-center text-sm gap-4 justify-between">
          <Link
            href="/products"
            className="bg-amber-300 text-[#12263F] px-4 py-2 rounded-full font-light hover:bg-amber-200 transition-colors text-sm"
          >
            See the Products{" "}
            <span aria-hidden="true" className="ml-2 hidden sm:inline">
              →
            </span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
