"use client";

import { navLinks } from "@/lib/navigation";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="md:hidden"
      onKeyDown={(e) => {
        if (e.key === "Escape") setIsOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="flex items-center h-11 w-11 justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F59E0B]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {" "}
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}{" "}
        </svg>
      </button>
      <nav
        id="mobile-menu"
        aria-label="Mobile Navigation"
        className={`absolute top-18 left-0 right-0 mx-auto w-19/20 origin-top rounded-lg bg-amber-50 p-4 text-[#12263F] shadow-md transition-all duration-200 ease-out motion-reduce:transition-none ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href} className="my-1">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md border border-transparent p-2 transition-colors duration-150 hover:border-amber-300 hover:bg-amber-100 active:bg-amber-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
