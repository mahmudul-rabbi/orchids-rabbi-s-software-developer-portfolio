"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "C#", "Dart", "Java", "JavaScript", "Python"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
    glow: "bg-blue-500/8",
  },
  {
    title: "Database Management",
    skills: ["SQL (MySQL, PostgreSQL, SQLite)", "NoSQL (MongoDB)", "Firebase Realtime Database"],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
    glow: "bg-purple-500/8",
  },
  {
    title: "Technology & Framework",
    skills: ["Native Android (Java)", "XML", "Flutter", "NestJS", "Express.js", "Next.js", "FastAPI", "Git"],
    color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 hover:bg-green-500/20",
    glow: "bg-green-500/8",
  },
  {
    title: "Tools & Platforms",
    skills: ["Linux (Ubuntu)", "Android Studio", "VS Code", "CP Editor", "CodeBlocks", "GitHub", "Jira", "Bitbucket"],
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20",
    glow: "bg-cyan-500/8",
  },
  {
    title: "Core Competencies",
    skills: ["Object-Oriented Programming", "Data Structures & Algorithms", "Problem Solving", "Competitive Programming"],
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20 hover:bg-pink-500/20",
    glow: "bg-pink-500/8",
  },
  {
    title: "Soft Skills",
    skills: ["Team Leadership", "Project Management", "Public Speaking", "Case Study"],
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20",
    glow: "bg-amber-500/8",
  },
]

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false)
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

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">

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
      <div className="absolute top-24 left-[6%]  w-72 h-72 rounded-full bg-violet-500/8 blur-[85px] pointer-events-none" />
      <div className="absolute bottom-16 right-[10%] w-80 h-80 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[110px] pointer-events-none" />

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

      {/* ── Content ── */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              Skills &amp; Technologies
            </motion.h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto mb-4"
              initial={{ width: 0 }} whileInView={{ width: 64 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in object-oriented programming, data structures, and algorithms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="outline"
                            className={`${category.color} transition-all cursor-default`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
