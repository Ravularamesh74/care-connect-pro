"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiology",
    rating: 4.9,
    experience: 15,
    available: true,
  },
  {
    id: 2,
    name: "Dr. James Patel",
    specialty: "Orthopedics",
    rating: 4.8,
    experience: 12,
    available: false,
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    specialty: "Dermatology",
    rating: 4.9,
    experience: 10,
    available: true,
  },
  {
    id: 4,
    name: "Dr. Michael Ross",
    specialty: "Neurology",
    rating: 4.7,
    experience: 18,
    available: true,
  },
  
];

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const specialties = ["All", ...new Set(doctorsData.map(d => d.specialty))];

  const filteredDoctors = doctorsData.filter((d) => {
    return (
      (filter === "All" || d.specialty === filter) &&
      d.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Doctors</h2>
          <p className="text-muted-foreground mt-3">
            Search, filter, and book appointments instantly
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search doctors..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {specialties.map((s) => (
              <Button
                key={s}
                variant={filter === s ? "default" : "outline"}
                onClick={() => setFilter(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border p-5 hover:shadow-xl transition group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold mx-auto">
                {d.name.split(" ")[1][0]}
              </div>

              {/* Info */}
              <h3 className="text-center mt-4 font-bold">{d.name}</h3>
              <p className="text-center text-sm text-primary">{d.specialty}</p>

              <div className="flex justify-center gap-3 mt-3 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {d.rating}
                </span>
                <span>•</span>
                <span>{d.experience} yrs</span>
              </div>

              {/* Availability */}
              <p
                className={`text-center mt-2 text-sm ${
                  d.available ? "text-green-500" : "text-red-500"
                }`}
              >
                {d.available ? "Available Today" : "Not Available"}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <Button
                  className="w-full"
                  disabled={!d.available}
                  onClick={() => alert(`Booking ${d.name}`)}
                >
                  Book
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedDoctor(d)}
                >
                  View
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl max-w-md w-full">
              <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
              <p className="text-primary">{selectedDoctor.specialty}</p>
              <p className="mt-2">
                Experience: {selectedDoctor.experience} years
              </p>

              <Button
                className="mt-4 w-full"
                onClick={() => setSelectedDoctor(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}