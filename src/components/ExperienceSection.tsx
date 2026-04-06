"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Calendar, MapPin, Building2, Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useState, useEffect } from "react"

const techTags: Record<string, string> = {
  "NestJS": "bg-red-500/10 text-red-500 border-red-500/20",
  "Flutter": "bg-sky-500/10 text-sky-500 border-sky-500/20",
  "Express.js": "bg-gray-500/10 text-gray-400 border-gray-500/20",
  "Next.js": "bg-foreground/10 text-foreground border-foreground/20",
  "Node.js": "bg-green-500/10 text-green-500 border-green-500/20",
  "Mongoose": "bg-amber-500/10 text-amber-500 border-amber-500/20",
  "Jira": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Bitbucket": "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  "Jest": "bg-orange-500/10 text-orange-500 border-orange-500/20",
  "SMS API": "bg-purple-500/10 text-purple-500 border-purple-500/20",
}

export default function ExperienceSection() {
  const [certOpen, setCertOpen] = useState(false)
  const [mounted, setMounted]   = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sx = useSpring(mouseX, { damping: 30, stiffness: 120 })
  const sy = useSpring(mouseY, { damping: 30, stiffness: 120 })

  useEffect(() => {
    if (!mounted) return
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth  - 0.5) * 30)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 30)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mounted, mouseX, mouseY])

  const experience = {
    title: "Software Engineer Intern",
    company: "Grameen HealthTech Limited",
    team: "Shukhee Team",
    location: "Dhaka, Bangladesh",
    period: "October 2025 – January 2026",
    technologies: ["NestJS", "Flutter", "Express.js", "Next.js", "Node.js", "Mongoose","PostgreSQL", "Jira", "Bitbucket", "Jest", "SMS API"],
    description: [
      "Built a cross-platform Alarm Service by developing a NestJS Medicine Reminder API and a Flutter module for Android/iOS, delivering reliable scheduling and push notifications in the live Shukhee app.",
      "Developed a full-stack Admin Feedback Dashboard, implementing an Express.js API for data collection and response handling, along with a Next.js frontend featuring a responsive UI and advanced filtering; successfully launched on the Shukhee Admin website.",
      "Built a Shop-in-Shop Proof of Delivery (POD) system with secure 6-digit code generation, validation, and SMS notifications for order confirmation; also implemented Proof of Return (POR) functionality to streamline delivery and return workflows.",
      "Wrote Jest automated tests for backend APIs to ensure reliability and prevent regressions.",
      "Collaborated in Agile sprints using Jira for task management and Bitbucket for version control.",
    ],
  }

  const extraActivities = [
    {
      role: "Competitive Programming Trainer",
      organization: "IUBAT CSE Department",
      period: "February 2023 – February 2025",
      level: "Level 0 & Level 1",
      description: "Mentored and trained 100+ students in problem-solving fundamentals, data structures, and competitive programming techniques, significantly improving their coding competition performance.",
      icon: "🎓",
    },
    {
      role: "Deputy Manager, Programming Wing",
      organization: "IUBAT IT SOCIETY",
      period: "August 2023 – December 2024",
      description: "Led programming initiatives and organized multiple coding competitions for the student community, fostering a collaborative learning environment and increasing participation by 40%.",
      icon: "🏛️",
    },
    {
      role: "Academic Mentor",
      organization: "Department of CSE, IUBAT",
      period: "August 2022 – August 2023",
      description: "Provided comprehensive academic guidance and support to junior students in computer science courses, helping them achieve improved grades and better understanding of core concepts.",
      icon: "📚",
    },
    {
      role: "Judge",
      organization: "CSE Battle of Intellects Spring 2025",
      period: "May 7, 2025",
      description: "Served as a judge for the university-level programming competition, evaluating solutions and providing constructive feedback to participants.",
      icon: "⚖️",
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4 overflow-hidden">

      {/* ── Hero-matching animated background ── */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-muted/10"
        style={{ x: sx, y: sy }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right,currentColor 1px,transparent 1px)," +
            "linear-gradient(to bottom,currentColor 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/8  blur-[85px] pointer-events-none" />
      <div className="absolute bottom-24 left-[6%]  w-80 h-80 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-violet-500/5 blur-[115px] pointer-events-none" />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width:  Math.random() * 5 + 2,
                height: Math.random() * 5 + 2,
                background:
                  i % 3 === 0 ? "rgba(139,92,246,0.3)"
                  : i % 3 === 1 ? "rgba(6,182,212,0.3)"
                  : "rgba(236,72,153,0.2)",
                left: `${Math.random() * 100}%`,
                top:  `${Math.random() * 100}%`,
              }}
              animate={{
                y:       [0, -(Math.random() * 90 + 40), 0],
                x:       [0,  (Math.random() - 0.5) * 55, 0],
                opacity: [0.1, 0.65, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 13,
                repeat:   Infinity,
                ease:     "easeInOut",
                delay:    Math.random() * 7,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work Experience
          </h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mb-12"
            initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* ── Main Experience Card ── */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-400 border-l-4 border-l-primary relative overflow-hidden group">
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-cyan-500/0 group-hover:from-primary/3 group-hover:to-cyan-500/3 transition-all duration-500 pointer-events-none" />

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl mb-1">{experience.title}</CardTitle>
                      <div className="font-semibold text-foreground flex items-center gap-2 text-base sm:text-lg">
                        <Building2 className="h-4 w-4 text-primary" />
                        {experience.company}
                      </div>
                      <div className="text-sm text-muted-foreground ml-6 mt-0.5">{experience.team}</div>
                    </div>
                    {/* Completed badge */}
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-semibold">
                      Completed
                    </span>
                  </div>

                  <CardDescription className="space-y-1 pt-2">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span className="font-medium text-foreground/80">{experience.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {experience.location}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {experience.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 * i }}
                        className="flex gap-2.5 text-muted-foreground text-sm leading-relaxed"
                      >
                        <span className="text-primary mt-1 font-bold shrink-0">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${techTags[tech] ?? "bg-muted/50 text-muted-foreground border-border"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Internship Certificate link */}
                  <motion.button
                    onClick={() => setCertOpen(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-1 group/cert"
                  >
                    <Award className="h-4 w-4" />
                    <span className="underline underline-offset-4 group-hover/cert:no-underline">
                      View Internship Certificate
                    </span>
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* ── Extracurricular Activities ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
              Leadership &amp; Extracurricular Activities
            </h3>
            <motion.div
              className="w-14 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mb-8"
              initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {extraActivities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 to-cyan-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="text-xl">{activity.icon}</span>
                        {activity.role}
                      </CardTitle>
                      <CardDescription className="space-y-1 pt-1">
                        <div className="font-semibold text-foreground/80 text-sm">{activity.organization}</div>
                        {activity.level && (
                          <div className="text-xs text-primary font-medium">{activity.level}</div>
                        )}
                        <div className="text-xs flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {activity.period}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Certificate Modal ── */}
      {certOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setCertOpen(false)}
        >
          <motion.div
            className="relative bg-background rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col"
            initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-bold text-lg">Internship Certificate</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/Md. Mahmudul Hasan Rabbi-Tech.pdf"
                  download
                  className="flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                >
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setCertOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 overflow-auto min-h-0">
              <iframe
                src="/Md. Mahmudul Hasan Rabbi-Tech.pdf"
                className="w-full"
                style={{ height: "75vh", border: "none" }}
                title="Internship Certificate"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
