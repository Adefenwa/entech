import { navLinks } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4] text-[#12263F]  border-b  border-[#12263F]/10">
      <div className="flex justify-between py-4 w-19/20 md:mx-auto md:max-w-7xl md:items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="EnTech Logo" width={38} height={38} />
          <h1 className="text-xl font-normal">EnTech</h1>
        </Link>
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-4 md:flex"
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
        <div className="mt-2 flex items-center gap-4 justify-between">
          <Link
            href="/products"
            className="bg-[#F59E0B] text-[#12263F] px-4 py-2 rounded-full font-light hover:bg-[#D97706] transition-colors text-sm sm:text-base"
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
