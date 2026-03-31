import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  { name: "Dr. Sarah Mitchell", specialty: "Cardiologist", rating: 4.9, experience: "15 yrs", color: "from-primary/20 to-secondary" },
  { name: "Dr. James Patel", specialty: "Orthopedic Surgeon", rating: 4.8, experience: "12 yrs", color: "from-accent/20 to-secondary" },
  { name: "Dr. Emily Chen", specialty: "Dermatologist", rating: 4.9, experience: "10 yrs", color: "from-primary/20 to-secondary" },
  { name: "Dr. Michael Ross", specialty: "Neurologist", rating: 4.7, experience: "18 yrs", color: "from-accent/20 to-secondary" },
];

const Doctors = () => (
  <section id="doctors" className="py-24" style={{ background: "var(--section-gradient)" }}>
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-sm font-body font-semibold text-primary tracking-widest uppercase">Our Specialists</span>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-3">Meet Our Expert Doctors</h2>
        <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">Highly qualified professionals dedicated to your health and well-being.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className={`h-48 bg-gradient-to-br ${d.color} flex items-center justify-center`}>
              <div className="w-24 h-24 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-3xl font-sans font-bold text-primary">
                {d.name.split(" ").slice(1).map(n => n[0]).join("")}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-sans font-bold text-foreground">{d.name}</h3>
              <p className="font-body text-sm text-primary mt-1">{d.specialty}</p>
              <div className="flex items-center gap-3 mt-3 text-sm font-body text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-accent fill-accent" /> {d.rating}</span>
                <span>•</span>
                <span>{d.experience} experience</span>
              </div>
              <Button size="sm" className="w-full mt-4">Book Appointment</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Doctors;
