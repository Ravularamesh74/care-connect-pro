import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Features", href: "features" },
  { label: "How It Works", href: "how-it-works" },
  { label: "Doctors", href: "doctors" },
  { label: "Testimonials", href: "testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Scroll Spy + Navbar Shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        navLinks.forEach((link) => {
          const section = document.getElementById(link.href);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActive(link.href);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // 🔥 Smooth Scroll or Navigate
  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  // 🔥 Handle Hash Scroll on Page Load
  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash, location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-primary font-bold text-xl"
        >
          <Stethoscope className="w-7 h-7" />
          MediBook
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavClick(l.href)}
              className={`text-sm transition ${
                active === l.href && location.pathname === "/"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" onClick={() => handleNavClick("book")}>
            Book Appointment
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b px-4 pb-4 space-y-3 overflow-hidden"
          >
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className={`block w-full text-left text-sm ${
                  active === l.href && location.pathname === "/"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}

            <Button
              className="w-full mt-2"
              onClick={() => handleNavClick("book")}
            >
              Book Appointment
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}