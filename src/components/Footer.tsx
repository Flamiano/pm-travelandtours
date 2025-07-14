"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--forest-green)] text-[color:var(--linen)] px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <Image
            src="/logo.png"
            alt="Travel & Tours Logo"
            width={40}
            height={40}
            className="rounded-sm"
            priority
          />
          <span className="text-xl font-bold tracking-wide">
            Travel & Tours
          </span>
        </motion.div>

        {/* Column 2: About Website */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2">About This Website</h3>
          <p className="text-sm leading-relaxed opacity-90">
            This platform is designed to streamline reservation workflows and
            enhance visitor engagement for Travel and Tours companies. It
            delivers detailed facility information, intuitive scheduling
            capabilities, and a seamless, modern user experience.
          </p>
          <p className="mt-2 text-sm">
            Project Manager: <strong>John Roel R. Flamiano</strong>
          </p>
        </motion.div>

        {/* Column 3: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-[color:var(--linen)]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:text-[color:var(--linen)]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline hover:text-[color:var(--linen)]"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-10 text-center text-xs opacity-70"
      >
        © {currentYear} Travel & Tours. All Rights Reserved.
      </motion.div>
    </footer>
  );
};
