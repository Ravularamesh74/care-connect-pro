import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Record = {
  id: string;
  name: string;
  age: number;
  condition: string;
  date: string;
  status: "Active" | "Recovered" | "Critical";
};

const mockData: Record[] = [
  {
    id: "1",
    name: "Ravi Kumar",
    age: 32,
    condition: "Diabetes",
    date: "2026-03-28",
    status: "Active",
  },
  {
    id: "2",
    name: "Sneha Reddy",
    age: 27,
    condition: "Hypertension",
    date: "2026-03-20",
    status: "Recovered",
  },
  {
    id: "3",
    name: "Arjun Patel",
    age: 45,
    condition: "Heart Disease",
    date: "2026-03-15",
    status: "Critical",
  },
];

const statusStyles = {
  Active: "bg-blue-500/20 text-blue-400",
  Recovered: "bg-green-500/20 text-green-400",
  Critical: "bg-red-500/20 text-red-400",
};

const HealthRecords = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = useMemo(() => {
    return mockData.filter((record) => {
      const matchesSearch =
        record.name.toLowerCase().includes(search.toLowerCase()) ||
        record.condition.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || record.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 px-4 container mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <h1 className="text-2xl font-bold">Health Records</h1>

          {/* Controls */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search patients..."
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
              <option>Active</option>
              <option>Recovered</option>
              <option>Critical</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-x-auto rounded-xl border border-border bg-card shadow"
        >
          <table className="w-full text-left">
            <thead className="bg-muted text-muted-foreground text-sm">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Age</th>
                <th className="p-4">Condition</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((record) => (
                  <tr
                    key={record.id}
                    className="border-t hover:bg-muted/50 transition"
                  >
                    <td className="p-4">{record.name}</td>
                    <td className="p-4">{record.age}</td>
                    <td className="p-4">{record.condition}</td>
                    <td className="p-4">{record.date}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${statusStyles[record.status]}`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-muted-foreground">
                    No records found
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

export default HealthRecords;