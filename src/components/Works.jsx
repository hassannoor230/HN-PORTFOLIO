import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Lumina — E-Commerce Platform',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2024',
    description: 'A luxury e-commerce platform with immersive product browsing, AI-powered recommendations, and seamless checkout flows.',
    color: '#C9A84C',
    number: '01',
  },
  {
    id: 2,
    title: 'Aura — Social Media App',
    category: 'Mobile & Web',
    tags: ['React Native', 'Firebase', 'Redux'],
    year: '2024',
    description: 'Next-generation social platform focused on authentic connection with algorithmic-free feeds and creative expression tools.',
    color: '#8B9D77',
    number: '02',
  },
  {
    id: 3,
    title: 'Nexus — SaaS Dashboard',
    category: 'Frontend',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    year: '2023',
    description: 'Enterprise analytics dashboard with real-time data visualization, collaborative workspaces, and intelligent reporting.',
    color: '#7B8FA1',
    number: '03',
  },
  {
    id: 4,
    title: 'Botanica — Brand Identity',
    category: 'Design',
    tags: ['Figma', 'Branding', 'UI/UX'],
    year: '2023',
    description: 'Complete brand identity and digital presence for a sustainable skincare brand, from logo to full design system.',
    color: '#A18B77',
    number: '04',
  },
  {
    id: 5,
    title: 'Cipher — Crypto Wallet',
    category: 'Web3',
    tags: ['React', 'Web3.js', 'Solidity'],
    year: '2023',
    description: 'Secure and intuitive crypto wallet with multi-chain support, DeFi integrations, and hardware wallet compatibility.',
    color: '#9B7FA1',
    number: '05',
  },
  {
    id: 6,
    title: 'Pulse — Health Tracker',
    category: 'Mobile',
    tags: ['Flutter', 'Dart', 'HealthKit'],
    year: '2022',
    description: 'Comprehensive wellness application integrating biometric tracking, personalized coaching, and medical-grade insights.',
    color: '#B07A7A',
    number: '06',
  },
]

const filters = ['All', 'Full Stack', 'Frontend', 'Design', 'Mobile & Web', 'Web3', 'Mobile']

export default function Works() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="works" style={{ padding: '140px 0', background: 'var(--bg)', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Selected Work
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 600,
              color: 'var(--text)',
              lineHeight: 1.05,
              letterSpacing: '-1px',
            }}>
              Featured Projects
            </h2>
            <p style={{
              maxWidth: '320px',
              fontSize: '14px',
              color: 'var(--text-dim)',
              lineHeight: 1.8,
              fontFamily: 'var(--font-body)',
            }}>
              A curated selection of projects that showcase my range, attention to detail, and commitment to excellence.
            </p>
          </div>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '64px' }}
        >
          {filters.map(f => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: active === f ? 'var(--gold)' : 'transparent',
                border: `1px solid ${active === f ? 'var(--gold)' : 'rgba(201,168,76,0.2)'}`,
                color: active === f ? 'var(--bg)' : 'var(--text-dim)',
                padding: '8px 18px',
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects List */}
        <div>
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderTop: '1px solid var(--border)',
                  padding: '40px 0',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  gap: '32px',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Hover background */}
                <motion.div
                  animate={{ opacity: hovered === project.id ? 1 : 0 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(90deg, ${project.color}08, transparent)`,
                    borderLeft: `2px solid ${project.color}`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Number */}
                <motion.div
                  animate={{ color: hovered === project.id ? project.color : 'var(--text-muted)' }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '36px',
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {project.number}
                </motion.div>

                {/* Content */}
                <div>
                  <motion.h3
                    animate={{ x: hovered === project.id ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(22px, 3vw, 34px)',
                      fontWeight: 500,
                      color: 'var(--text)',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    animate={{ opacity: hovered === project.id ? 1 : 0, y: hovered === project.id ? 0 : -8 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-dim)',
                      lineHeight: 1.7,
                      maxWidth: '600px',
                      marginBottom: '16px',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {project.description}
                  </motion.p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '11px',
                        color: 'var(--text-dim)',
                        background: 'var(--bg-3)',
                        border: '1px solid var(--border)',
                        padding: '3px 10px',
                        letterSpacing: '1px',
                        fontFamily: 'var(--font-body)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Right meta */}
                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '2px', marginBottom: '12px', fontFamily: 'var(--font-body)' }}>
                    {project.year}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: project.color,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-body)',
                  }}>
                    {project.category}
                  </div>
                  <motion.div
                    animate={{
                      x: hovered === project.id ? 0 : 8,
                      opacity: hovered === project.id ? 1 : 0,
                    }}
                    style={{
                      fontSize: '20px',
                      color: project.color,
                      marginTop: '16px',
                    }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #works .container > div:last-child > div > div {
            grid-template-columns: 50px 1fr !important;
            gap: 16px !important;
          }
          #works .container > div:last-child > div > div > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
