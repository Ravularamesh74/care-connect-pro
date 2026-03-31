import { motion } from "framer-motion";
import { Clock, Bell, CalendarCheck, ShieldCheck, Users, Smartphone } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Online Booking", desc: "Patients book appointments anytime from any device — no phone calls needed." },
  { icon: Bell, title: "Smart Reminders", desc: "Automated SMS, email & WhatsApp reminders reduce no-shows by up to 70%." },
  { icon: CalendarCheck, title: "Real-Time Scheduling", desc: "Live calendar sync ensures no double-bookings across departments." },
  { icon: ShieldCheck, title: "Secure Health Records", desc: "HIPAA-compliant data storage keeps patient information safe and encrypted." },
  { icon: Users, title: "Multi-Doctor Support", desc: "Manage schedules for entire hospitals with department-wise doctor panels." },
  { icon: Smartphone, title: "Telehealth Ready", desc: "Built-in video consultation support for remote patient care." },
];

const Features = () => (
  <section id="features" className="py-24" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-sm font-body font-semibold text-primary tracking-widest uppercase">Why Choose Us</span>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-3">Advanced Features for Modern Healthcare</h2>
        <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">Everything you need to digitize patient scheduling, reduce admin burden, and deliver a world-class experience.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <f.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-sans text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
