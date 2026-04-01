"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  UserCheck,
  CalendarPlus,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Search Doctor",
    desc: "Find specialists by department, name, or availability.",
    full: "Use advanced filters to search doctors by specialty, availability, ratings, and location in real-time.",
  },
  {
    icon: UserCheck,
    num: "02",
    title: "Choose Time Slot",
    desc: "Pick a convenient date and time.",
    full: "Select from live available slots synced with doctor schedules to avoid conflicts.",
  },
  {
    icon: CalendarPlus,
    num: "03",
    title: "Confirm Booking",
    desc: "Instant confirmation process.",
    full: "Fill your details and confirm instantly with secure booking and validation.",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "Get Reminders",
    desc: "Stay updated with notifications.",
    full: "Receive automated reminders via SMS, email, and WhatsApp to never miss appointments.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-sm text-primary font-semibold uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold mt-3">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Book your appointment in 4 seamless steps.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-4 gap-6 relative">

          {/* PROGRESS LINE */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-border">
            <motion.div
              className="h-1 bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${(active / 3) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              onClick={() => setActive(i)}
              className={`cursor-pointer text-center p-4 rounded-xl transition ${
                active === i
                  ? "bg-primary/10 border border-primary"
                  : "hover:bg-muted"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 ${
                  active === i
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <s.icon className="w-6 h-6" />
              </div>

              <p className="text-xs text-primary font-bold">{s.num}</p>
              <h3 className="font-bold mt-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DETAIL PANEL */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold">
            {steps[active].title}
          </h3>
          <p className="text-muted-foreground mt-4">
            {steps[active].full}
          </p>

          <Button className="mt-6">
            Start Booking
          </Button>
        </motion.div>
      </div>
    </section>
  );
}