import { footerNavLinks } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#12263f] text-[#fff] p-4">
      <Link href="/" className="flex items-center gap-2 my-4">
        <Image src="/logo-white.svg" alt="EnTech Logo" width={38} height={38} />
        <h1 className="text-2xl font-bold">EnTech</h1>
      </Link>
      <div>
        <p>
          Building clearer, safer ways to understand LPG at home and at work.
        </p>
      </div>
      <nav className="flex flex-col items-left gap-3">
        {footerNavLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
