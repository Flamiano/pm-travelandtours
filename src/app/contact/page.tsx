"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Navbar />

      {/* Header */}
      <section className="min-h-[50vh] flex items-center justify-center text-center px-6 sm:px-12 bg-[color:var(--forest-green)] text-[color:var(--linen)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Get in Touch</h1>
          <p className="text-sm sm:text-base opacity-90">
            We'd love to hear from you. Reach out for inquiries, support, or
            collaborations.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[color:var(--forest-green)] mb-6">
            Contact Details
          </h2>

          <div className="space-y-6 text-sm sm:text-base">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[color:var(--forest-green)] mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:johnroelf17@gmail.com"
                  className="hover:underline"
                >
                  johnroelf17@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[color:var(--forest-green)] mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+63 994 595 3073</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[color:var(--forest-green)] mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Quezon City</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1752507689830!6m8!1m7!1stKVhwnDAMUbOWsTee6Yitg!2m2!1d14.72662985390938!2d121.0373473614249!3f254.22949!4f0!5f0.7820865974627469"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
