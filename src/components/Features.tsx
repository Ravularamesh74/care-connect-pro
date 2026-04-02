"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Bell,
  CalendarCheck,
  ShieldCheck,
  Users,
  Smartphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Clock,
    title: "24/7 Online Booking",
    desc: "Patients book anytime without calls.",
    full: "Patients can book appointments 24/7 from web or mobile with real-time availability and instant confirmation.",
    stat: "24/7",
    href: "#book"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    desc: "Reduce no-shows drastically.",
    full: "Automated reminders via SMS, email, and WhatsApp reduce no-shows by up to 70%.",
    stat: "70%",
  },
  {
    icon: CalendarCheck,
    title: "Real-Time Scheduling",
    desc: "No double bookings.",
    full: "Live calendar sync ensures accurate appointment scheduling across departments.",
    stat: "Live Sync",
  },
  {
    icon: ShieldCheck,
    title: "Secure Records",
    desc: "Encrypted patient data.",
    full: "All patient data is encrypted and stored securely with compliance standards.",
    stat: "100% Secure",
    href: "/health-records"
  },
  {
    icon: Users,
    title: "Multi-Doctor Support",
    desc: "Manage hospital teams.",
    full: "Manage multiple doctors, departments, and schedules from a single dashboard.",
    stat: "Unlimited",
  },
  {
    icon: Smartphone,
    title: "Telehealth Ready",
    desc: "Online consultations.",
    full: "Integrated video consultations allow remote care for patients anywhere.",
    stat: "Remote Care",
    href: "/online-consultation"
  },
];

export default function Features() {
  const [active, setActive] = useState<any>(null);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase text-primary font-semibold tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold mt-3">
            Advanced Healthcare Features
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Powerful tools to digitize hospitals and improve patient experience.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(f)}
              className="cursor-pointer bg-card border rounded-2xl p-6 hover:shadow-xl transition group"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                <f.icon className="w-6 h-6" />
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-lg">{f.title}</h3>

              {/* DESC */}
              <p className="text-sm text-muted-foreground mt-2">
                {f.desc}
              </p>

              {/* STAT */}
              <div className="mt-4 text-primary font-bold text-xl">
                {f.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" onClick={() => {
            document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get Started Now
          </Button>
        </div>

        {/* MODAL */}
        {active && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-card border rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <active.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{active.full}</p>

              <div className="flex flex-col gap-3">
                {active.href && (
                  <Button asChild className="w-full">
                    {active.href.startsWith('#') ? (
                      <button onClick={() => {
                        const id = active.href.replace('#', '');
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                        setActive(null);
                      }}>
                        Explore Feature
                      </button>
                    ) : (
                      <Link to={active.href} onClick={() => setActive(null)}>View Service</Link>
                    )}
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setActive(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
