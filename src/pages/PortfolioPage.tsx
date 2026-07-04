import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Brain,
  Database,
  Cpu,
  Layers,
  Award,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const sectionIds = ['about', 'skills', 'projects', 'education', 'certifications', 'contact'];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const skillIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="h-4 w-4" />,
  'Frameworks & Libraries': <Layers className="h-4 w-4" />,
  'AI & Automation': <Brain className="h-4 w-4" />,
  'Databases & Tools': <Database className="h-4 w-4" />,
  Networking: <Cpu className="h-4 w-4" />,
  Concepts: <Award className="h-4 w-4" />,
};

const skillColors: Record<string, string> = {
  Languages: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Frameworks & Libraries': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'AI & Automation': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Databases & Tools': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Networking: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  Concepts: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function PortfolioPage(): React.ReactElement {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#" onClick={() => scrollTo('#')} className="group flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              MH
            </span>
            <span className="hidden font-semibold tracking-tight md:block">Muhammad Hassan</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border md:hidden"
            >
              <nav className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 md:px-6">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-3xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for internship opportunities
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl"
            >
              Muhammad Hassan
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg font-medium text-primary md:text-xl"
            >
              {portfolioData.title}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty"
            >
              {portfolioData.summary}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button onClick={() => scrollTo('#contact')} size="lg" className="min-w-[10rem]">
                Get in touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[10rem]"
                onClick={() => scrollTo('#projects')}
              >
                View projects
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
            >
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </motion.div>
          </motion.div>

          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#about');
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.a>
        </section>

        <section id="about" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">About</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Engineering profile
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="mt-10 grid gap-8 md:grid-cols-2"
            >
              <motion.div variants={fadeInUp} className="space-y-4 text-pretty">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {portfolioData.summary}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  My work spans machine learning pipelines, compiler construction, full-stack web
                  applications, and automation workflows. I care about writing clean, maintainable
                  code and building systems that are practical, measurable, and easy to extend.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3"
              >
                {[
                  { label: 'Years of study', value: '4+' },
                  { label: 'Projects', value: '4' },
                  { label: 'Certifications', value: '2' },
                  { label: 'Focus', value: 'AI/ML' },
                  { label: 'Location', value: 'Lahore' },
                  { label: 'Status', value: 'Available' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center rounded-lg border border-border bg-card/50 p-4"
                  >
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="border-t border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mb-10"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Skills</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Technical toolkit
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
                A practical mix of languages, frameworks, AI platforms, and engineering concepts
                gathered across academic and personal projects.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {Object.entries(portfolioData.skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  className="rounded-lg border border-border bg-card/50 p-5"
                >
                  <div className="mb-4 flex items-center gap-2 text-foreground">
                    <span className={skillColors[category] ?? 'bg-primary/10 text-primary border-primary/20'}>
                      {skillIcons[category]}
                    </span>
                    <h3 className="font-semibold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="border-t border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mb-10"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Projects</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Selected work
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
                Production-style builds that cover ML systems, compiler design, full-stack web
                apps, and automation agents.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2"
            >
              {portfolioData.projects.map((project) => (
                <motion.div
                  key={project.name}
                  variants={fadeInUp}
                  className="flex flex-col rounded-lg border border-border bg-card/50 p-6 transition-colors hover:border-primary/30"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground text-balance">{project.name}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground hover:text-foreground"
                        aria-label={`${project.name} GitHub repository`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      View repository
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="education" className="border-t border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mb-10"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Education</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Academic background
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="rounded-lg border border-border bg-card/50 p-6 md:p-8"
            >
              {portfolioData.education.map((edu) => (
                <div key={edu.degree} className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-sm font-semibold text-foreground">Relevant coursework</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 text-left md:text-right">
                    <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {edu.expected}
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">{edu.status}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="certifications" className="border-t border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mb-10"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Certifications</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Credentials
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2"
            >
              {portfolioData.certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card/50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="border-t border-border px-4 py-20 md:px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mb-10"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Let&apos;s connect
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
                Open to software development internships, collaboration, and interesting engineering
                conversations.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  icon: <Mail className="h-5 w-5" />,
                  label: 'Email',
                  value: portfolioData.contact.email,
                  href: `mailto:${portfolioData.contact.email}`,
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/muhammad-hassan-817678328',
                  href: portfolioData.contact.linkedin,
                },
                {
                  icon: <Github className="h-5 w-5" />,
                  label: 'GitHub',
                  value: 'github.com/muhammadhassan-ai',
                  href: portfolioData.contact.github,
                },
                {
                  icon: <Phone className="h-5 w-5" />,
                  label: 'Phone',
                  value: portfolioData.contact.phone,
                  href: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}`,
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  variants={fadeInUp}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col rounded-lg border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    {item.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</span>
                  <span className="mt-1 break-words text-sm font-semibold text-foreground">{item.value}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4" />
              {portfolioData.contact.location}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-6 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>&copy; {new Date().getFullYear()} Muhammad Hassan. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  );
}
