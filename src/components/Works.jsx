import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import eCommerceImg from "../projects/e-commerce.png";
import socialImg from "../projects/social.png";
import dashboardImg from "../projects/dashboard.png";
import designImg from "../projects/design.png";
import cryptoImg from "../projects/crypto.png";
import healthImg from "../projects/health.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: eCommerceImg,
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "MERN Stack"],
    year: "2024",
    description:
      "Complete MERN stack e-commerce platform with product management, cart system, and secure checkout.",
    number: "01",
  },
  {
    id: 2,
    title: "Social Media Application",
    image: socialImg,
    category: "Full Stack",
    tags: ["React", "Firebase", "Redux", "Authentication", "Real-time Chat"],
    year: "2024",
    description:
      "Modern social media platform with posts, likes, comments, and real-time messaging.",
    number: "02",
  },
  {
    id: 3,
    title: "SaaS Admin Dashboard",
    image: dashboardImg,
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "Charts.js", "Data Visualization", "TypeScript"],
    year: "2023",
    description:
      "Analytics dashboard with real-time charts, reports, and user management features.",
    number: "03",
  },
  {
    id: 4,
    title: "UI/UX Brand Design",
    image: designImg,
    category: "Design",
    tags: ["Figma", "Branding", "UI/UX Design", "Prototyping", "Wireframes"],
    year: "2023",
    description:
      "Complete brand identity and UI design system for modern startups.",
    number: "04",
  },
  {
    id: 5,
    title: "Crypto Wallet App",
    image: cryptoImg,
    category: "Web3",
    tags: ["React", "Web3.js", "Solidity", "Ethereum", "DeFi Integration"],
    year: "2023",
    description:
      "Secure cryptocurrency wallet with multi-chain support and DeFi integrations.",
    number: "05",
  },
  {
    id: 6,
    title: "Health Tracking App",
    image: healthImg,
    category: "Mobile",
    tags: ["Flutter", "Dart", "HealthKit", "Biometric Tracking"],
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
  const [selectedProject, setSelectedProject] = useState(null);

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
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
              <div style={{ fontSize: "26px", color: "var(--text-muted)" }}>
                {project.number}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "10px" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  />
                  <motion.h3
                    animate={{ x: hovered === project.id ? 8 : 0 }}
                    style={{ fontSize: "26px", fontWeight: "500" }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <p style={{ color: "var(--text-dim)", marginBottom: "12px" }}>
                  {project.description}
                </p>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "12px" }}>{project.year}</div>
                <div style={{ fontSize: "12px", color: "#C9A84C" }}>
                  {project.category}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#111",
                padding: "30px",
                borderRadius: "12px",
                maxWidth: "800px",
                width: "100%",
              }}
            >
              <img
                src={selectedProject.image}
                alt=""
                style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
              />

              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: "#aaa", marginBottom: "15px" }}>
                {selectedProject.description}
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "15px" }}>
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      border: "1px solid #444",
                      padding: "5px 12px",
                      fontSize: "12px",
                      borderRadius: "6px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: "12px", color: "#aaa" }}>
                <strong>Category:</strong> {selectedProject.category} <br />
                <strong>Year:</strong> {selectedProject.year}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}