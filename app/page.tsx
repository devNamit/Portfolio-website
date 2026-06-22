'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { ContactForm } from '@/components/contact-form'
import { ChatAssistant } from '@/components/chat-assistant'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const skillCard = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
}

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Page() {

  const skills = [
    'Next.js', 'React', 'TypeScript', 'JavaScript',
    'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Docker', 'AWS',
    'MongoDB', 'Git', 'Github', 'REST APIs', 'Vercel', 'Render', 'C++', 'GitHub Actions', 'Jest'
  ]

  const projects = [
    {
      title: 'WanderLust',
      description: 'A full-stack travel listing platform where users can create, explore, and review travel destinations. Features secure authentication, interactive maps, and robust server-side validation.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Passport.js', 'JWT', 'Leaflet.js', 'Bootstrap', 'HTML', 'CSS'],
      github: 'https://github.com/devNamit/WanderLust',
      live: 'https://wanderlust-project-y7sd.onrender.com/listings'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
                  Namit Srivastava
                </h1>
                <h2 className="text-2xl sm:text-3xl text-primary font-light">
                  Full-Stack Developer
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-lg text-balance">
                I build modern web applications with a focus on performance, scalability, and exceptional user experiences. Specializing in Next.js, React, and TypeScript.
              </motion.p>
              <motion.div variants={fadeUp} className="flex gap-4 justify-center lg:justify-start">
                <a href="#projects">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    View My Work
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Get In Touch
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-96 lg:h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary">NS</div>
                  <p className="text-sm text-muted-foreground mt-2">Full-Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I&apos;m a passionate Full-Stack Developer with a deep love for crafting elegant solutions to complex problems. With expertise in modern JavaScript frameworks and cloud technologies, I create web applications that are not just functional but delightful to use.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in web development started with a fascination for how things work on the internet. Over the years, I&apos;ve honed my skills in building scalable, performant applications that prioritize user experience and maintainability.
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Core Values</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      'Writing clean, maintainable code',
                      'Performance and scalability first',
                      'User-centric design thinking',
                      'Continuous learning and improvement'
                    ].map((val, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Skills & Technologies</h2>
          </Section>
          <SkillsGrid skills={skills} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Featured Projects</h2>
            <div className="space-y-12">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group"
                  whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
                >
                  <div className="grid md:grid-cols-2 gap-4 p-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            GitHub
                          </Button>
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            Live Demo
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div className="relative h-32 sm:h-48 rounded-lg overflow-hidden border border-border order-1 md:order-2">
                      <img
                        src="/wanderlust.png"
                        alt="WanderLust Project"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-balance text-center">Get In Touch</h2>
            <div className="bg-card border border-border rounded-xl p-8 flex justify-center">
              <ContactForm />
            </div>
            <div className="mt-12 flex justify-center gap-6">
              <a href="https://github.com/devNamit" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/namitsrivastava" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.91v8.5h2.91v-4.31c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.31h2.91S18.5 12.5 18.5 10.6z" />
                </svg>
              </a>
              <a href="mailto:namitsrivastava814@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Email</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </Section>
        </div>
      </section>

      <ChatAssistant />

      <footer className="border-t border-border bg-card/50 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2026 Namit Srivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function SkillsGrid({ skills }: { skills: string[] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          variants={skillCard}
          whileHover={{ scale: 1.04, borderColor: 'var(--primary)' }}
          className="bg-card border border-border rounded-lg p-4 cursor-default group transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">{skill}</span>
            <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
