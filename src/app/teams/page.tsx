"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User, Users, Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const teams = [
  {
    system: "Human Resource 1 (Talent Acquisition & Workforce Entry)",
    leader: {
      name: "Buyser, Eymard C.",
      role: "Team Leader",
      description:
        "He is the one who oversees the development of applicant onboarding and recruitment modules for HR1. Ensures the team is aligned with goals.",
    },
    members: [
      "Padua, Shayne",
      "Dulfo, Vincent",
      "Mangulabnan, Althea",
      "Conag, Shan Cai",
    ],
  },
  {
    system: "Human Resource 2 (Talent Development & Career Pathing)",
    leader: {
      name: "Flamiano, John Roel R.",
      role: "Team Leader",
      description:
        "Leads the design of talent growth systems such as Learning and Career Development. Oversees integration with the ESS portal.",
    },
    members: ["John Doe 5", "John Doe 6", "John Doe 7", "John Doe 8"],
  },
  {
    system: "Human Resource 3 (Workforce Operations & Time Management)",
    leader: {
      name: "Años, Jhon Lloyd V.",
      role: "Team Leader",
      description:
        "Manages modules for time tracking, leave requests, and employee attendance. Ensures system efficiency and accuracy.",
    },
    members: [
      "Licudan, Jhon Peter R.",
      "Cruz, Mark Justin S.",
      "Pablo, Airiz Mae O.",
      "Saminado Reybie Ruelo Jr.",
    ],
  },
  {
    system: "Human Resource 4 (Compensation & HR Intelligence)",
    leader: {
      name: "Valerio, Karl Andrei P.",
      role: "Team Leader",
      description:
        "Handles payroll systems, compensation logic, and HR analytics integration. Maintains data security and dashboard metrics.",
    },
    members: [
      "Sentin, John Paul",
      "Tatoy Jessa Thea ",
      "Dalagan, Yumie Margareth N.",
      "Moralita, Jack",
    ],
  },
  {
    system: "Core Transaction 1 (Tour Operations and Customer Booking System)",
    leader: {
      name: "Payabyab, John Michael D.",
      role: "Team Leader",
      description:
        "Oversees the development of the booking engine, customer registration, and tour package scheduling.",
    },
    members: [
      "Ecle, Tyron",
      "Torrecampo, Cymon Zaki",
      "Lago, Aldrin",
      "Zuñiga, Carl Janssen",
    ],
  },
  {
    system: "Core Transaction 2 (Back-Office and Agency Management System)",
    leader: {
      name: "Miguel, Jhaztin Bryan",
      role: "Team Leader",
      description:
        "Leads development of internal tools for agents and admin including partner and financial reporting tools.",
    },
    members: [
      "Agravante, Dominic A.",
      "Viloria, Rosendo R.",
      "Burongan, Yazer",
      "Valiente, Franie A.",
    ],
  },
  {
    system: "Logistics 1 (Smart Supply Chain & Procurement Management)",
    leader: {
      name: "Martin, John Kevin",
      role: "Team Leader",
      description:
        "Manages logistics modules including warehousing, sourcing, procurement, and logistics tracking.",
    },
    members: [
      "Maniflor, Jan Dhenniel B.",
      "Moreta, Denis John D.",
      "Libron, Romeo V.",
      "Nobleza, Jake O.",
    ],
  },
  {
    system: "Logistics 2 (Fleet and Transportation Operations)",
    leader: {
      name: "Danao, James Patrick",
      role: "Team Leader",
      description:
        "Handles fleet management features such as trip monitoring, vehicle assignment, and mobile dispatch systems.",
    },
    members: [
      "Afable, Ronald L. Jr.",
      "Grospe, Denmark",
      "Bayot, Mark Joseph",
      "Austria, Christian Paul",
    ],
  },
  {
    system: "Administrative",
    leader: {
      name: "Flamiano, John Roel R.",
      role: "Team Leader",
      description:
        "Directs modules related to visitor handling, document archiving, legal management, and facility reservation.",
    },
    members: [
      "Dadivas, Jaymark N.",
      "Canaveral, Bianca Mae D.",
      "Realto, Russel M.",
      "Barte, Jomar C.",
    ],
  },
  {
    system: "Financials",
    leader: {
      name: "Bautista, Nhico Bryone C.",
      role: "Team Leader",
      description:
        "Oversees the development of financial modules such as budgeting, disbursement, and accounting dashboards.",
    },
    members: [
      "Cabañas, Emmanuel C.",
      "Mallorca, Leslie F.",
      "Alonzo, Regine",
      "Zachary, Isaac",
    ],
  },
];

export default function TeamsPage() {
  return (
    <main className="bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Navbar />

      {/* Hero Header with Animation */}
      <section className="min-h-[50vh] flex items-center justify-center text-center px-6 sm:px-12 bg-[color:var(--forest-green)] text-[color:var(--linen)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Meet the Project Team
          </h1>
          <p className="text-sm sm:text-base opacity-90 max-w-2xl mx-auto">
            Our system is led by{" "}
            <strong>Project Manager John Roel R. Flamiano</strong>, with
            dedicated teams handling Human Resources, Logistics, Transactions,
            and Financials — all crafted for a complete tourism solution.
          </p>
        </motion.div>
      </section>

      {/* Teams Section */}
      <section className="min-h-screen px-6 py-20 sm:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between gap-10 bg-white p-6 rounded-xl shadow border border-[color:var(--forest-green)]"
            >
              {/* Left Side */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-[color:var(--forest-green)] mb-3">
                  {team.system}
                </h2>
                <div className="flex items-center gap-2 mb-1 text-[color:var(--forest-green)]">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{team.leader.role}:</span>
                </div>
                <h3 className="font-bold mb-2">{team.leader.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {team.leader.description}
                </p>

                <div className="flex gap-2 mt-4">
                  <button className="cursor-pointer px-4 py-2 text-sm bg-[color:var(--forest-green)] text-white rounded-full hover:bg-[color:var(--steel-blue)] transition flex items-center gap-1">
                    <ExternalLink size={16} /> Visit
                  </button>
                  <button className="cursor-pointer px-4 py-2 text-sm bg-[color:var(--forest-green)] text-white rounded-full hover:bg-[color:var(--steel-blue)] transition flex items-center gap-1">
                    <Eye size={16} /> Details
                  </button>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold flex items-center gap-2 mb-3 text-[color:var(--forest-green)]">
                  <Users className="w-5 h-5" /> Members
                </h4>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {team.members.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
