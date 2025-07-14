"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Globe, Users, HelpCircle, Mail } from "lucide-react";

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Travel & Tours?",
      answer:
        "Travel & Tours is a centralized tourism platform developed to manage bookings, HR, logistics, and administrative tasks for travel agencies and tour companies.",
    },
    {
      question: "Who is the project lead?",
      answer:
        "The project is led by Project Manager John Roel R. Flamiano, who distributed system modules to team leaders for collaborative and modular development.",
    },
    {
      question: "What inspired this system?",
      answer:
        "We recognized the fragmented tools used by many tour companies. Travel & Tours solves that by offering a unified system for end-to-end operations.",
    },
    {
      question: "What technologies were used?",
      answer:
        "We built the system using React, Next.js, TailwindCSS, Lucide Icons, Framer Motion, and other modern frameworks to ensure performance and UI/UX excellence.",
    },
    {
      question: "Is the system customizable?",
      answer:
        "Yes, it's modular. Different features like HR, bookings, logistics, and finance can be enabled, configured, or extended based on client needs.",
    },
    {
      question: "Who is this system for?",
      answer:
        "It’s built for tourism agencies, resorts, transport operators, booking services, and logistics-based travel companies.",
    },
    {
      question: "How is it different from standard booking tools?",
      answer:
        "Unlike standalone booking tools, our platform includes HR management, fleet logistics, analytics dashboards, payroll integration, and legal tracking.",
    },
    {
      question: "Can this be scaled for large enterprises?",
      answer:
        "Absolutely. The system architecture supports scalability for companies with multiple branches, fleets, or employee tiers.",
    },
    {
      question: "Is there mobile compatibility?",
      answer:
        "Yes, the system is responsive and optimized for mobile, tablet, and desktop devices.",
    },
    {
      question: "What kind of support can be integrated?",
      answer:
        "Future versions may include in-app chat support, notification systems, report generation, and more.",
    },
  ];

  return (
    <main className="bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Navbar />

      {/* Hero Header with Animation */}
      <section className="min-h-[50vh] flex items-center justify-center text-center px-6 sm:px-12 bg-[color:var(--forest-green)] text-[color:var(--linen)] mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Travel & Tours
          </h1>
          <p className="text-sm sm:text-base opacity-90 leading-relaxed">
            <strong>Travel & Tours</strong> is a modern web-based system
            developed by BSIT students to streamline the operations of tourism
            businesses. Led by Project Manager{" "}
            <strong>John Roel R. Flamiano</strong>, this project integrates
            modules for HR, Booking, Fleet, Logistics, and Financial Management
            — all tailored to empower travel and tour companies.
          </p>
        </motion.div>
      </section>

      {/* Vision / Mission / Why Choose Us */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mb-20 text-center">
        {[
          {
            icon: (
              <Briefcase className="mx-auto w-10 h-10 text-[color:var(--forest-green)] mb-4" />
            ),
            title: "Our Vision",
            text: "To be the leading digital platform transforming the tourism industry through smart automation and unified systems.",
          },
          {
            icon: (
              <Users className="mx-auto w-10 h-10 text-[color:var(--forest-green)] mb-4" />
            ),
            title: "Our Mission",
            text: "To simplify tourism operations and empower agencies with efficient HR, logistics, and booking tools — all in one ecosystem.",
          },
          {
            icon: (
              <Globe className="mx-auto w-10 h-10 text-[color:var(--forest-green)] mb-4" />
            ),
            title: "Why Choose Us",
            text: "We optimize operations, HR, and logistics under one modular platform designed for growth.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-6 rounded-lg shadow-md border border-[color:var(--forest-green)] bg-white"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-[color:var(--forest-green)] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[color:var(--forest-green)] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isActive
                      ? "border-[color:var(--forest-green)] shadow-md"
                      : "border-gray-200 hover:border-[color:var(--forest-green)]"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`flex justify-between items-center w-full p-5 text-left ${
                      isActive ? "bg-[color:var(--linen)]" : "bg-white"
                    } cursor-pointer`}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <HelpCircle
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive
                          ? "rotate-180 text-[color:var(--forest-green)]"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-gray-600"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[color:var(--forest-green)] text-[color:var(--linen)] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Mail className="mx-auto mb-4 w-10 h-10" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-2"
          >
            Need More Info?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm mb-4"
          >
            We’d love to help you understand the full potential of our Travel
            &amp; Tours System.
          </motion.p>

          <motion.a
            href="mailto:johnroelf17@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mt-2 bg-[color:var(--tan)] text-black px-6 py-2 rounded-full hover:bg-white transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
