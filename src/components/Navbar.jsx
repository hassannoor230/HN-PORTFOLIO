import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Home', 'About', 'Works', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 40px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <motion.div
          onClick={() => scrollTo('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={{
            width: 36,
            height: 36,
            border: '1px solid var(--gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--gold)',
            letterSpacing: '1px',
          }}>H</div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            fontWeight: 500,
            color: 'var(--text)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}>Hassan Noor</span>
        </motion.div>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }}
          className="desktop-nav">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4, duration: 0.5 }}
            >
              <NavLink onClick={() => scrollTo(link)}>{link}</NavLink>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              onClick={() => scrollTo('Contact')}
              whileHover={{ scale: 1.04, backgroundColor: 'var(--gold)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                border: '1px solid var(--gold)',
                background: 'transparent',
                color: 'var(--gold)',
                padding: '8px 22px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--bg)'}
              onMouseLeave={e => e.target.style.color = 'var(--gold)'}
            >
              Hire Me
            </motion.button>
          </motion.li>
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', padding: '8px', display: 'none', flexDirection: 'column', gap: '6px' }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 9 : menuOpen && i === 2 ? -9 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              style={{ display: 'block', width: 24, height: 1, background: 'var(--gold)', transformOrigin: 'center' }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              background: 'rgba(8,8,8,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '30px 40px',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  letterSpacing: '2px',
                }}
              >
                {link}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}

function NavLink({ children, onClick }) {
  return (
    <motion.span
      onClick={onClick}
      style={{
        color: 'var(--text-dim)',
        fontFamily: 'var(--font-body)',
        fontSize: '12px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        position: 'relative',
        paddingBottom: '4px',
      }}
      whileHover={{ color: 'var(--gold)' }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          background: 'var(--gold)',
          width: '0%',
        }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.25 }}
      />
    </motion.span>
  )
}
