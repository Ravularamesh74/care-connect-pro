import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-doctor.jpg";

const Hero = () => (
  <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            #1 Healthcare Appointment Platform
          </span>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-tight">
            Smart Appointment
            <br />
            Booking for{" "}
            <span className="text-primary">Hospitals</span>{" "}
            & <span className="text-accent">Clinics</span>
          </h1>
          <p className="font-body text-muted-foreground mt-6 text-lg max-w-lg leading-relaxed">
            Say goodbye to scheduling chaos. Automate bookings, reduce no-shows, and deliver a seamless experience for patients and staff.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" className="gap-2 shadow-lg" style={{ boxShadow: "var(--glow)" }}>
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="w-4 h-4" /> Watch Demo
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-10 font-body text-sm text-muted-foreground">
            <div><span className="font-sans font-bold text-foreground text-xl">50K+</span><br />Appointments</div>
            <div className="w-px h-10 bg-border" />
            <div><span className="font-sans font-bold text-foreground text-xl">200+</span><br />Doctors</div>
            <div className="w-px h-10 bg-border" />
            <div><span className="font-sans font-bold text-foreground text-xl">98%</span><br />Satisfaction</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={heroImg} alt="Doctor using MediBook appointment system" className="w-full h-auto object-cover" width={800} height={900} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-xl border border-border p-4 hidden md:block">
            <p className="font-body text-xs text-muted-foreground">Next Appointment</p>
            <p className="font-sans font-bold text-foreground text-sm mt-1">Dr. Sarah Mitchell</p>
            <p className="font-body text-xs text-primary mt-0.5">Today, 2:30 PM</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
