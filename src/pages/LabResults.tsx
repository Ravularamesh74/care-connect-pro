import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LabResult = {
  id: string;
  patient: string;
  test: string;
  date: string;
  status: "Normal" | "Abnormal" | "Critical";
  details: {
    parameter: string;
    value: string;
    range: string;
  }[];
};

const mockResults: LabResult[] = [
  {
    id: "1",
    patient: "Ravi Kumar",
    test: "Complete Blood Count",
    date: "2026-03-30",
    status: "Normal",
    details: [
      { parameter: "Hemoglobin", value: "14 g/dL", range: "13-17" },
      { parameter: "WBC", value: "6000 /µL", range: "4000-11000" },
    ],
  },
  {
    id: "2",
    patient: "Sneha Reddy",
    test: "Lipid Profile",
    date: "2026-03-29",
    status: "Abnormal",
    details: [
      { parameter: "Cholesterol", value: "240 mg/dL", range: "<200" },
      { parameter: "LDL", value: "160 mg/dL", range: "<100" },
    ],
  },
  {
    id: "3",
    patient: "Arjun Patel",
    test: "Blood Sugar",
    date: "2026-03-28",
    status: "Critical",
    details: [
      { parameter: "Fasting", value: "220 mg/dL", range: "70-100" },
      { parameter: "Postprandial", value: "350 mg/dL", range: "<140" },
    ],
  },
];

const statusStyles = {
  Normal: "bg-green-500/20 text-green-400",
  Abnormal: "bg-yellow-500/20 text-yellow-400",
  Critical: "bg-red-500/20 text-red-400",
};

const LabResults = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return mockResults.filter((item) => {
      const matchesSearch =
        item.patient.toLowerCase().includes(search.toLowerCase()) ||
        item.test.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || item.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 px-4 container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold">Lab Results</h1>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search patients/tests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg border bg-muted focus:outline-none"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border bg-muted"
            >
              <option>All</option>
              <option>Normal</option>
              <option>Abnormal</option>
              <option>Critical</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border bg-card overflow-hidden shadow"
        >
          <table className="w-full text-left">
            <thead className="bg-muted text-sm text-muted-foreground">
              <tr>
                <th className="p-4">Patient</th>
                <th className="p-4">Test</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    className="border-t hover:bg-muted/50 transition"
                  >
                    <td className="p-4">{item.patient}</td>
                    <td className="p-4">{item.test}</td>
                    <td className="p-4">{item.date}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() =>
                          setExpanded(expanded === item.id ? null : item.id)
                        }
                        className="text-primary underline"
                      >
                        {expanded === item.id ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>

                  {/* Expand Row */}
                  <AnimatePresence>
                    {expanded === item.id && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-muted/30"
                      >
                        <td colSpan={5} className="p-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            {item.details.map((d, i) => (
                              <div
                                key={i}
                                className="p-3 rounded-lg border bg-background"
                              >
                                <p className="text-sm font-medium">{d.parameter}</p>
                                <p className="text-xs text-muted-foreground">
                                  Value: {d.value}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Range: {d.range}
                                </p>
                              </div>
                            ))}
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-muted-foreground">
                    No lab results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default LabResults;