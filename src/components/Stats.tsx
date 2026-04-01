"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 50000, suffix: "+", label: "Appointments Booked" },
  { value: 200, suffix: "+", label: "Expert Doctors" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 15, suffix: "+", label: "Departments" },
];

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * target),
        target
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, start]);

  return count;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // 🔥 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => {
            const count = useCountUp(s.value, visible);

            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  visible
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:shadow-xl transition"
              >
                {/* NUMBER */}
                <p className="text-4xl font-extrabold">
                  {count.toLocaleString()}
                  {s.suffix}
                </p>

                {/* LABEL */}
                <p className="text-sm mt-2 opacity-90">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}