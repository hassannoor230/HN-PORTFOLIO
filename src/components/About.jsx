import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img from '../../public/Me.png'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'] },
  { category: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack'] },
]

const timeline = [
  { year: '2024', title: 'Senior Frontend Developer', company: 'Tech Studio Pro' },
  { year: '2022', title: 'Full Stack Developer', company: 'Digital Agency Co.' },
  { year: '2020', title: 'Junior Developer', company: 'StartUp Labs' },
  { year: '2019', title: 'BS Computer Science', company: 'University of Lahore' },
]

function FadeIn({ children, delay = 0, y = 30 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{ padding: '140px 0', background: 'var(--bg-2)', position: 'relative' }}>
      {/* Decorative line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div className="container">
        {/* Section header */}
        <FadeIn>
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
                Who I Am
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 600,
              color: 'var(--text)',
              lineHeight: 1.05,
              letterSpacing: '-1px',
            }}>
              About Me
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left: Text + Avatar */}
          <div>
            <FadeIn delay={0.1}>
              {/* Avatar placeholder with animated golden light moving along sides */}
              <motion.div
                className="avatar-container"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  marginBottom: '48px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative corner */}
                <div style={{ position: 'absolute', top: 8, left: 8, width: 40, height: 40, borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' }} />
                <div style={{ position: 'absolute', bottom: 8, right: 8, width: 40, height: 40, borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' }} />

                {/* Image */}
                <img
                  src={img}
                  alt="Hassan Noor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
                {/* Text overlay - hidden on mobile */}
                <div className="avatar-text-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  zIndex: 2,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    marginBottom: '8px',
                  }}>Hassan Noor</p>
                  <p style={{
                    fontSize: '11px',
                    color: 'var(--gold)',
                    letterSpacing: '2px',
                    marginBottom: '14px',
                    fontFamily: 'var(--font-body)',
                  }}>MERN STACK DEVELOPER</p>
                </div>

                {/* Animated scan line */}
                <motion.div
                  animate={{ y: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
                    top: 0,
                  }}
                />
              </motion.div>
            </FadeIn>
          </div>

          {/* Right: Bio + Timeline */}
          <div>
            <FadeIn delay={0.2}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                lineHeight: 1.9,
                color: 'var(--text-dim)',
                marginBottom: '24px',
              }}>
                I'm a passionate MERN Stack Developer based in Pakistan with over 5 years of experience building modern, scalable, and high-performance web applications. I specialize in creating full-stack solutions using MongoDB, Express.js, React.js, and Node.js.

My approach combines clean code, modern design, and strong problem-solving skills to deliver applications that are not only powerful but also user-friendly. From developing responsive frontends to building secure and efficient backend systems, I focus on creating products that provide real value.

I believe great web applications are built where technology meets creativity. Every line of code and every interface element matters, and my goal is to craft digital experiences that are fast, intuitive, and impactful.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                lineHeight: 1.9,
                color: 'var(--text-dim)',
                marginBottom: '48px',
              }}>
                My philosophy is simple: every pixel matters. I blend technical precision 
                with creative vision to build products that don't just work — they <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>resonate</em>.
              </p>
            </FadeIn>

            {/* Skills Grid */}
            <FadeIn delay={0.3}>
              <div style={{ marginBottom: '56px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '24px',
                  letterSpacing: '0.5px',
                }}>Skills & Expertise</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div style={{
                        fontSize: '10px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: '10px',
                        fontFamily: 'var(--font-body)',
                      }}>{skill.category}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {skill.items.map(item => (
                          <span key={item} style={{
                            background: 'var(--gold-dim)',
                            border: '1px solid rgba(201,168,76,0.2)',
                            color: 'var(--text-dim)',
                            padding: '4px 10px',
                            fontSize: '12px',
                            fontFamily: 'var(--font-body)',
                          }}>{item}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Timeline */}
            <FadeIn delay={0.4}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 500,
                color: 'var(--text)',
                marginBottom: '28px',
              }}>Experience</h3>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'linear-gradient(var(--gold), transparent)',
                }} />
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      paddingLeft: '28px',
                      marginBottom: '32px',
                      position: 'relative',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: '-4px',
                      top: '6px',
                      width: '9px',
                      height: '9px',
                      background: 'var(--gold)',
                      borderRadius: '50%',
                    }} />
                    <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '2px', marginBottom: '4px', fontFamily: 'var(--font-body)' }}>
                      {item.year}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--text)', fontWeight: 500 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-dim)', marginTop: '2px', fontFamily: 'var(--font-body)' }}>
                      {item.company}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        .avatar-container {
          width: 100%;
        }
        .avatar-text-overlay {
          display: flex !important;
        }
        @media (max-width: 768px) {
          .avatar-container {
            width: 250px;
            margin: 0 auto;
            max-height: 350px;
          }
          .avatar-text-overlay {
            display: none !important;
          }
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
