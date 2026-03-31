import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Appointments Booked" },
  { value: "200+", label: "Expert Doctors" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "15+", label: "Departments" },
];

const Stats = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-sans text-3xl md:text-4xl font-extrabold">{s.value}</p>
            <p className="font-body text-sm mt-1 opacity-80">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
