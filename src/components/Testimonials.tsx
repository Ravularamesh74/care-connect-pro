import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Anita Sharma", text: "Booking was so easy! I got an appointment within minutes and the reminders helped me not miss it.", rating: 5 },
  { name: "Robert Williams", text: "The telehealth feature is amazing. I consulted with my doctor from home. Truly next-gen healthcare!", rating: 5 },
  { name: "Priya Menon", text: "Managing my family's appointments in one place is a lifesaver. The interface is clean and intuitive.", rating: 5 },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-sm font-body font-semibold text-primary tracking-widest uppercase">Patient Stories</span>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-3">What Our Patients Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border p-7 relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-accent fill-accent" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">"{r.text}"</p>
            <p className="font-sans font-bold text-foreground text-sm">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
