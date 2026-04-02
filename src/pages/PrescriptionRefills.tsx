import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Prescription = {
  id: string;
  medication: string;
  dosage: string;
  lastFilled: string;
  status: "Available" | "Pending" | "Expired";
};

const mockPrescriptions: Prescription[] = [
  { id: "1", medication: "Metformin", dosage: "500mg", lastFilled: "2026-02-15", status: "Available" },
  { id: "2", medication: "Lisinopril", dosage: "10mg", lastFilled: "2026-03-01", status: "Pending" },
  { id: "3", medication: "Amoxicillin", dosage: "250mg", lastFilled: "2025-12-20", status: "Expired" },
];

const statusStyles = {
  Available: "bg-green-500/20 text-green-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Expired: "bg-red-500/20 text-red-400",
};

const PrescriptionRefills = () => {
  const [search, setSearch] = useState("");
  const [requestSent, setRequestSent] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return mockPrescriptions.filter((p) =>
      p.medication.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleRefillRequest = (id: string) => {
    setRequestSent(id);
    setTimeout(() => setRequestSent(null), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Prescription Refills</h1>
          <p className="text-muted-foreground">Manage and request refills for your medications.</p>
        </motion.div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search medications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border bg-card"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl border bg-card shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold">{p.medication}</h2>
                  <p className="text-sm text-muted-foreground">{p.dosage}</p>
                </div>
                <span className={`px-3 py-1 text-xs rounded-full ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
              </div>
              
              <div className="text-sm mb-6">
                <p><span className="text-muted-foreground">Last Filled:</span> {p.lastFilled}</p>
              </div>

              <button
                disabled={p.status !== "Available" || requestSent === p.id}
                onClick={() => handleRefillRequest(p.id)}
                className="w-full py-2 bg-primary text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition"
              >
                {requestSent === p.id ? "Request Sent ✔" : "Request Refill"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrescriptionRefills;