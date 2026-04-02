"use client";

import { useState } from "react";
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  Share2,
} from "lucide-react";

// Social Icon Components (because they are missing from this version of lucide-react)
const Facebook = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Instagram = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Doctors", href: "#doctors" },
  { name: "Book Appointment", href: "#book" },
];

const services = [
  { name: "Online Consultation", href: "/online-consultation" },
  { name: "Lab Results", href: "/lab-results" },
  { name: "Prescription Refills", href: "/prescription-refills" },
  { name: "Health Records", href: "/health-records" },
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
                <li key={s.name} className="hover:text-primary transition">
                  <Link to={s.href}>{s.name}</Link>
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
            <Link to="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}