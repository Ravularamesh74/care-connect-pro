import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Doctor = {
  id: string;
  name: string;
  specialization: string;
  status: "Available" | "Busy" | "Offline";
};

const doctorsData: Doctor[] = [
  { id: "1", name: "Dr. Ramesh", specialization: "Cardiologist", status: "Available" },
  { id: "2", name: "Dr. Priya", specialization: "Dermatologist", status: "Busy" },
  { id: "3", name: "Dr. Arjun", specialization: "General Physician", status: "Available" },
];

const statusStyles = {
  Available: "bg-green-500/20 text-green-400",
  Busy: "bg-yellow-500/20 text-yellow-400",
  Offline: "bg-gray-500/20 text-gray-400",
};

const OnlineConsultation = () => {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [bookingTime, setBookingTime] = useState("");
  const [inCall, setInCall] = useState(false);

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doc) => {
      const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());
      const matchesSpec =
        specialization === "All" || doc.specialization === specialization;
      return matchesSearch && matchesSpec;
    });
  }, [search, specialization]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Online Consultation</h1>
          <p className="text-muted-foreground">Speak with our expert doctors from the comfort of your home.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
          <div className="flex gap-3 flex-1">
            <input
              type="text"
              placeholder="Search doctors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg border bg-card focus:outline-none w-full max-w-sm"
            />

            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="px-4 py-2 rounded-lg border bg-card"
            >
              <option>All</option>
              <option>Cardiologist</option>
              <option>Dermatologist</option>
              <option>General Physician</option>
            </select>
          </div>
        </div>

        {/* Doctor List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredDoctors.map((doc) => (
            <motion.div
              key={doc.id}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl border bg-card shadow-sm cursor-pointer hover:shadow-md transition"
              onClick={() => setSelectedDoctor(doc)}
            >
              <h2 className="text-xl font-bold">{doc.name}</h2>
              <p className="text-muted-foreground mb-4">{doc.specialization}</p>

              <span
                className={`px-3 py-1 text-xs rounded-full ${statusStyles[doc.status]}`}
              >
                {doc.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Booking Panel */}
        {selectedDoctor && !inCall && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 border rounded-2xl bg-card shadow-xl max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-2">
              Book Consultation with {selectedDoctor.name}
            </h2>
            <p className="text-muted-foreground mb-6">Choose a date and time for your video call.</p>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Select Date & Time</label>
              <input
                type="datetime-local"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="px-4 py-3 border rounded-xl w-full bg-muted"
              />
            </div>

            <div className="flex gap-4">
              <button
                disabled={!bookingTime}
                onClick={() => setInCall(true)}
                className="flex-1 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 disabled:opacity-50 transition"
              >
                Start Consultation
              </button>

              <button
                onClick={() => setSelectedDoctor(null)}
                className="px-8 py-3 border rounded-xl hover:bg-muted transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

        {/* Video Call Simulation */}
        {inCall && selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 p-8 rounded-3xl bg-black text-white flex flex-col items-center"
          >
            <h2 className="mb-6 text-xl font-bold">
              Live Consultation: {selectedDoctor.name}
            </h2>

            {/* Video Placeholder */}
            <div className="w-full max-w-3xl aspect-video bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500 font-medium">Connecting to secure stream...</span>
               </div>
               <div className="absolute bottom-4 right-4 w-32 aspect-video bg-neutral-800 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] text-neutral-500">You</span>
               </div>
            </div>

            <button
              onClick={() => {
                setInCall(false);
                setSelectedDoctor(null);
              }}
              className="px-12 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition bounce-on-hover"
            >
              End Call
            </button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OnlineConsultation;