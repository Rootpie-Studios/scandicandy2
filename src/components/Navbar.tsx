"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hem" },
  { href: "/produkter", label: "Produkter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header style={{ backgroundColor: "#1E1E1E" }} className="sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity shrink-0">
          <Image src="/logo.png" alt="Scandi Candy" width={64} height={45} className="object-contain" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-semibold tracking-widest uppercase transition-colors relative group"
                style={{ color: pathname === href ? "#FBBC0F" : "rgba(255,255,255,0.75)" }}
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full"
                  style={{ backgroundColor: "#FBBC0F", width: pathname === href ? "100%" : undefined }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translateY(8px)" : "none" }} />
          <span className="block h-0.5 w-6 bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }} />
          <span className="block h-0.5 w-6 bg-white transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 border-t border-white/10"
        style={{ maxHeight: open ? "200px" : "0", backgroundColor: "#1E1E1E" }}
      >
        <ul className="px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-semibold tracking-widest uppercase transition-colors"
                style={{ color: pathname === href ? "#FBBC0F" : "rgba(255,255,255,0.75)" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
