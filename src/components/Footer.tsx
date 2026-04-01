"use client";

import { useState } from "react";
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Doctors", href: "#doctors" },
  { name: "Book Appointment", href: "#book" },
];

const services = [
  "Online Consultation",
  "Lab Results",
  "Prescription Refills",
  "Health Records",
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    try {
      setLoading(true);

      // Fake API (replace with backend)
      await new Promise((res) => setTimeout(res, 1000));

      alert("✅ Subscribed successfully!");
      setEmail("");
    } catch {
      alert("❌ Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-foreground to-black text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Stethoscope className="w-6 h-6 text-primary" />
              Care Connect Pro
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Smart healthcare platform for seamless appointments,
              patient management, and modern medical systems.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="hover:text-primary transition"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {services.map((s) => (
                <li key={s} className="hover:text-primary transition">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>

            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex gap-2">
                <Mail className="w-4 h-4" />
                careconnectpro@gmail.com
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4" />
                +91 9640059577
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4" />
                Secunderabad, Telangana
              </li>
            </ul>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <p className="text-sm mb-2">Subscribe</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  onClick={handleSubscribe}
                  disabled={loading}
                >
                  {loading ? "..." : "Go"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>© 2026 Care Connect Pro. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}