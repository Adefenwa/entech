import { navLinks } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4] text-[#12263F] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="EnTech Logo" width={38} height={38} />
          <h1 className="text-2xl font-bold">EnTech</h1>
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
            className="bg-[#F59E0B] text-[#12263F] px-4 py-2 rounded-md font-semibold hover:bg-[#D97706] transition-colors"
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
