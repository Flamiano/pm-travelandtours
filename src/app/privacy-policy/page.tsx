"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyAndTermsPage() {
  return (
    <main className="bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Navbar />

      {/* Header Section */}
      <section className="min-h-[60vh] flex items-center justify-center text-center px-6 sm:px-12 bg-[color:var(--forest-green)] text-[color:var(--linen)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Privacy Policy & Terms
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            Know how we collect, protect, and use your data — and the rules when
            using this platform.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-20 space-y-16 text-justify text-sm sm:text-base leading-relaxed">
        {/* Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-[color:var(--forest-green)] mb-4">
            Privacy Policy
          </h2>
          <p>
            Travel & Tours respects your privacy and is committed to protecting
            any personal information you share with us. We collect data such as
            your name, email, and usage patterns solely for the purpose of
            improving your experience with our system. This data is never shared
            with third-party services without your consent.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              We only collect necessary information for functionality and
              service quality.
            </li>
            <li>All data is stored securely and encrypted.</li>
            <li>You have the right to request data deletion at any time.</li>
          </ul>
        </motion.div>

        {/* Terms and Conditions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-[color:var(--forest-green)] mb-4">
            Terms & Conditions
          </h2>
          <p>
            By using Travel & Tours, you agree to follow these terms and
            conditions. These are necessary to maintain a fair, safe, and secure
            environment for all users and stakeholders.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              Do not share your login credentials or access unauthorized areas
              of the system.
            </li>
            <li>
              System misuse or abuse will result in temporary or permanent
              account suspension.
            </li>
            <li>
              You are responsible for the accuracy of the information you
              provide.
            </li>
            <li>We reserve the right to update these terms at any time.</li>
          </ul>
        </motion.div>

        {/* Consent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-[color:var(--forest-green)] mt-10 mb-2">
            Consent
          </h2>
          <p>
            By using this website, you hereby consent to our Privacy Policy and
            agree to our Terms & Conditions.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
