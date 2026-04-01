"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-doctor.jpg";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [counts, setCounts] = useState({
    appointments: 0,
    doctors: 0,
    satisfaction: 0,
  });

  // 🔥 Animated Counters
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setCounts({
        appointments: Math.min(i * 500, 50000),
        doctors: Math.min(i * 2, 200),
        satisfaction: Math.min(i * 1, 98),
      });
      if (i > 100) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-32 pb-24 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              #1 Healthcare Platform
            </span>

            {/* TITLE */}
            <h1 className="text-5xl font-extrabold leading-tight">
              Smart Appointment <br />
              Booking for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hospitals & Clinics
              </span>
            </h1>

            {/* DESC */}
            <p className="text-muted-foreground mt-6 text-lg max-w-lg">
              Automate bookings, reduce no-shows, and deliver a seamless
              patient experience with AI-powered scheduling.
            </p>

            {/* CTA */}
            <div className="flex gap-4 mt-8">
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="gap-2 shadow-xl"
              >
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowVideo(true)}
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* STATS */}
            <div className="flex gap-8 mt-10 text-sm">
              <div>
                <p className="text-2xl font-bold">
                  {counts.appointments.toLocaleString()}+
                </p>
                <p className="text-muted-foreground">Appointments</p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {counts.doctors}+
                </p>
                <p className="text-muted-foreground">Doctors</p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {counts.satisfaction}%
                </p>
                <p className="text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Doctor"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-xl"
            >
              <p className="text-xs text-muted-foreground">
                Next Appointment
              </p>
              <p className="font-bold">Dr. Priya</p>
              <p className="text-primary text-sm">Today 2:30 PM</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 max-w-2xl w-full">
            <iframe
              className="w-full h-[400px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allowFullScreen
            />
            <Button
              className="mt-4 w-full"
              onClick={() => setShowVideo(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}