import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";


const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB"],
    year: "2024",
    description:
      "Complete MERN stack e-commerce platform with product management, cart system and secure checkout.",
    number: "01",
  },
  {
    id: 2,
    title: "Social Media Application",
    category: "Full Stack",
    tags: ["React", "Firebase", "Redux"],
    year: "2024",
    description:
      "Modern social media platform with posts, likes, comments and real-time messaging.",
    number: "02",
  },
  {
    id: 3,
    title: "SaaS Admin Dashboard",
    category: "Frontend",
    tags: ["React", "Tailwind", "Charts"],
    year: "2023",
    description:
      "Analytics dashboard with real-time charts, reports and user management.",
    number: "03",
  },
  {
    id: 4,
    title: "UI/UX Brand Design",
    category: "Design",
    tags: ["Figma", "Branding", "UI/UX"],
    year: "2023",
    description:
      "Complete brand identity and UI design system for modern startups.",
    number: "04",
  },
  {
    id: 5,
    title: "Crypto Wallet App",
    category: "Web3",
    tags: ["React", "Web3.js", "Solidity"],
    year: "2023",
    description:
      "Secure cryptocurrency wallet with multi-chain support and DeFi integrations.",
    number: "05",
  },
  {
    id: 6,
    title: "Health Tracking App",
    category: "Mobile",
    tags: ["Flutter", "Dart"],
    year: "2022",
    description:
      "Mobile health tracking application with personalized wellness insights.",
    number: "06",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Design", "Web3", "Mobile"];

export default function Works() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="works" style={{ padding: "120px 0", background: "var(--bg)" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "48px", fontWeight: "600", marginBottom: "10px" }}>
            Featured Projects
          </h2>

          <p style={{ color: "var(--text-dim)", maxWidth: "500px" }}>
            A selection of my best projects demonstrating full stack development and modern UI design.
          </p>
        </motion.div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "50px" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "8px 16px",
                border: "1px solid var(--border)",
                background: active === f ? "#C9A84C" : "transparent",
                color: active === f ? "black" : "var(--text)",
                cursor: "pointer",
                fontSize: "12px",
                letterSpacing: "1px",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div>
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderTop: "1px solid var(--border)",
                  padding: "30px 0",
                  display: "grid",
                  gridTemplateColumns: "70px 1fr auto",
                  gap: "30px",
                  alignItems: "center",
                }}
              >
                {/* Number */}
                <div style={{ fontSize: "26px", color: "var(--text-muted)" }}>
                  {project.number}
                </div>

                {/* Content */}
                <div>
<div style={{ marginBottom: "10px" }}>
                      <motion.h3
                      animate={{ x: hovered === project.id ? 8 : 0 }}
                      style={{ fontSize: "26px", fontWeight: "500" }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  <p style={{ color: "var(--text-dim)", marginBottom: "12px", maxWidth: "600px" }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          border: "1px solid var(--border)",
                          padding: "4px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Meta */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "12px", marginBottom: "6px" }}>
                    {project.year}
                  </div>

                  <div style={{ fontSize: "12px", color: "#C9A84C" }}>
                    {project.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}