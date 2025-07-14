"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/teams", label: "Teams" },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className="relative group text-sm text-[color:var(--linen)]"
      >
        <span className="relative z-10">{label}</span>
        <span
          className={`absolute left-0 bottom-0 h-[2px] bg-[color:var(--linen)] transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[color:var(--forest-green)] text-[color:var(--linen)] px-6 py-4 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Travel & Tours Logo"
            width={32}
            height={32}
            className="rounded-sm"
            priority
          />
          <span className="text-xl font-extrabold tracking-wide">
            Travel & Tours
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Right Text */}
        <div className="hidden md:block text-sm font-[var(--font-sans)]">
          PM-31007
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[color:var(--linen)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-4"
          >
            <div className="flex flex-col items-start gap-4 px-4 text-sm font-[var(--font-sans)]">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
              <span className="text-xs mt-2 text-[color:var(--linen)] opacity-80">
                PM-31007
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
