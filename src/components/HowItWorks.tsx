import { motion } from "framer-motion";
import { Search, UserCheck, CalendarPlus, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Search Doctor", desc: "Find specialists by department, name, or availability." },
  { icon: UserCheck, num: "02", title: "Choose Time Slot", desc: "Pick a convenient date and time from real-time availability." },
  { icon: CalendarPlus, num: "03", title: "Confirm Booking", desc: "Fill in your details and confirm the appointment instantly." },
  { icon: CheckCircle, num: "04", title: "Get Reminders", desc: "Receive confirmation and reminders via SMS and email." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-sm font-body font-semibold text-primary tracking-widest uppercase">Simple Process</span>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-3">How It Works</h2>
        <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">Book your appointment in 4 easy steps — no hassle, no waiting.</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="font-sans text-4xl font-extrabold text-primary/15">{s.num}</span>
            <h3 className="font-sans text-lg font-bold text-foreground mt-1">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-2">{s.desc}</p>
            {i < 3 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-primary/30" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
