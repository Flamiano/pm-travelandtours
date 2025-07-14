"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Briefcase, Compass, Globe, Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] overflow-x-hidden">
      <Navbar />

      <main className="row-start-2">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="h-screen flex flex-col items-center justify-center text-center px-6 sm:px-20 bg-[color:var(--background)] text-[color:var(--foreground)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--forest-green)]">
              Travel & Tours Website
            </h1>
            <p className="mt-6 text-lg sm:text-xl">
              A unified platform for managing tourism operations, bookings,
              human resources, logistics, and administrative workflows —
              designed for modern travel agencies and tour management firms.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="rounded-full bg-[color:var(--forest-green)] text-white hover:bg-[#383838] transition h-12 px-6 flex items-center justify-center text-sm sm:text-base"
              >
                Explore
              </Link>
              <Link
                href="/teams"
                className="rounded-full bg-[color:var(--tan)] text-black hover:bg-[color:var(--forest-green)] transition h-12 px-6 flex items-center justify-center text-sm sm:text-base"
              >
                Teams
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 2: What This Website Offers */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 bg-[color:var(--tan)] text-black"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              What This Website Offers
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Smart HR Management",
                  icon: (
                    <Briefcase className="w-12 h-12 mx-auto text-[color:var(--forest-green)]" />
                  ),
                  desc: "Powerful talent acquisition, workforce management, and onboarding systems.",
                },
                {
                  title: "Tour & Booking Engine",
                  icon: (
                    <Compass className="w-12 h-12 mx-auto text-[color:var(--forest-green)]" />
                  ),
                  desc: "Dynamic customer booking, tour package management, and itinerary planning.",
                },
                {
                  title: "Fleet & Operations",
                  icon: (
                    <Globe className="w-12 h-12 mx-auto text-[color:var(--forest-green)]" />
                  ),
                  desc: "Smart logistics, transport dispatch, and supply chain visibility.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
                >
                  {item.icon}
                  <h3 className="mt-4 text-xl font-bold text-[color:var(--forest-green)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-sm opacity-80 max-w-3xl mx-auto"
            >
              Our Travel and Tours System integrates advanced modules across HR,
              Operations, Logistics, and Administration to deliver a complete
              enterprise solution for tourism companies.
            </motion.p>
          </div>
        </motion.section>

        {/* Section 3: System Overview */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 px-6 sm:px-12"
        >
          <h2 className="text-3xl font-bold text-center text-[color:var(--forest-green)] mb-12">
            Explore Our Core Systems
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "HR 1: Talent Acquisition",
                modules: [
                  "Applicant Management",
                  "Recruitment Management",
                  "New Hire Onboarding",
                  "Performance Management",
                  "Social Recognition",
                ],
              },
              {
                title: "HR 2: Talent Development",
                modules: [
                  "Competency Management",
                  "Learning Management",
                  "Training Management",
                  "Succession Planning",
                  "ESS Portal",
                ],
              },
              {
                title: "HR 3: Workforce Operations",
                modules: [
                  "Time & Attendance",
                  "Shift Scheduling",
                  "Timesheets",
                  "Leave & Claims",
                ],
              },
              {
                title: "HR 4: Compensation & Analytics",
                modules: [
                  "HCM Core",
                  "Payroll Management",
                  "HR Dashboard",
                  "Benefits Admin",
                ],
              },
              {
                title: "Tour Booking System",
                modules: [
                  "Package Management",
                  "Booking & Registration",
                  "Itinerary Scheduler",
                  "Invoice & Feedback",
                ],
              },
              {
                title: "Back-Office System",
                modules: [
                  "Agency Staff Management",
                  "Partner & Supplier Tools",
                  "Marketing Dashboard",
                  "Document Assistance",
                ],
              },
              {
                title: "Logistics 1: Supply Chain",
                modules: [
                  "Smart Warehouse",
                  "Procurement",
                  "Project Logistics",
                  "Asset Maintenance",
                ],
              },
              {
                title: "Logistics 2: Fleet Ops",
                modules: [
                  "Fleet Management",
                  "Trip Monitoring",
                  "Dispatch Scheduling",
                  "TCO Analysis",
                ],
              },
              {
                title: "Administrative",
                modules: [
                  "Facilities Reservation",
                  "Legal Mgmt",
                  "Visitor Tracking",
                  "Archiving",
                ],
              },
              {
                title: "Financials",
                modules: [
                  "Disbursements",
                  "Ledger & Budget",
                  "AP/AR",
                  "Collection Mgmt",
                ],
              },
            ].map((system, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="border border-[color:var(--forest-green)] rounded-lg p-5 shadow-sm bg-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[color:var(--forest-green)]">
                    {system.title}
                  </h3>
                  <ul className="text-sm text-gray-700 list-disc ml-4 mb-4">
                    {system.modules.map((mod, i) => (
                      <li key={i}>{mod}</li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto pt-2">
                  <button className="cursor-pointer px-4 py-2 text-sm bg-[color:var(--forest-green)] text-white rounded-full hover:bg-[color:var(--steel-blue)] transition flex items-center gap-1">
                    <ExternalLink size={16} /> Visit
                  </button>
                  <button className="cursor-pointer px-4 py-2 text-sm bg-[color:var(--forest-green)] text-white rounded-full hover:bg-[color:var(--steel-blue)] transition flex items-center gap-1">
                    <Eye size={16} /> Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
