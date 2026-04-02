import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
  { path: "/projects", name: "Projects" },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Dev logging
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("404:", location.pathname);
    }
  }, [location.pathname]);

  // Keyboard shortcut (ESC → back)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  // Auto redirect (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/");
    }, 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  // Smart suggestions
  const suggestions = useMemo(() => {
    return routes.filter((r) =>
      r.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white px-4">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-60" />

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        {/* 404 Title */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-2">
          Lost in space? 🚀
        </p>
        <p className="text-sm text-gray-400 mb-6">
          The page <span className="text-purple-400">{location.pathname}</span> doesn’t exist.
        </p>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Suggestions */}
        {query && (
          <div className="mb-6 text-left">
            {suggestions.length > 0 ? (
              suggestions.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="block w-full text-sm py-2 px-3 rounded hover:bg-white/10 transition"
                >
                  {item.name}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">No results found</p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition font-medium"
          >
            Go Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
          >
            Go Back (Esc)
          </button>
        </div>

        {/* Footer hint */}
        <p className="text-xs text-gray-500 mt-6">
          Tip: Press <span className="text-white">Esc</span> to go back
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;