import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '60px 0 40px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '48px',
        }}>
          {/* Logo */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              fontWeight: 600,
              color: 'var(--text)',
              letterSpacing: '-0.5px',
              marginBottom: '8px',
            }}>Hassan Noor</div>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '1px', fontFamily: 'var(--font-body)' }}>
              Creative Developer & Designer
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
              {['Home', 'About', 'Works', 'Contact'].map(link => (
                <li key={link}>
                  <motion.span
                    onClick={() => scrollTo(link.toLowerCase())}
                    whileHover={{ color: 'var(--gold)' }}
                    style={{
                      cursor: 'pointer',
                      fontSize: '11px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-body)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {link}
                  </motion.span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
              <motion.a
                key={s}
                href="#"
                whileHover={{ color: 'var(--gold)', scale: 1.05 }}
                style={{
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-dim)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.2s',
                }}
              >
                {s}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(201,168,76,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', letterSpacing: '1px' }}>
            © {year} Hassan Noor. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', letterSpacing: '1px' }}>
            Crafted with <span style={{ color: 'var(--gold)' }}>♥</span> & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
