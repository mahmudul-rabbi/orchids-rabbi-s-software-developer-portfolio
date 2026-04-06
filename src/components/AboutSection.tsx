"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { GraduationCap, Briefcase, MapPin, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function AboutSection() {
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

  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "International University of Business Agriculture and Technology",
      location: "Dhaka, Bangladesh",
      period: "January 2022 – January 2026",
      gpa: "3.94",
      maxGpa: "4.00",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Abdul Kadir Mollah City College",
      location: "Narsingdi, Bangladesh",
      period: "Passing Year: 2020",
      gpa: "5.00",
      maxGpa: "5.00",
      group: "Science",
      major: "Higher Mathematics",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shibpur Govt. Pilot Model High School",
      location: "Narsingdi, Bangladesh",
      period: "Passing Year: 2018",
      gpa: "4.83",
      maxGpa: "5.00",
      group: "Science",
      major: "Higher Mathematics",
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">

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
      <div className="absolute top-16 right-[12%] w-64 h-64 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-[8%] w-80 h-80 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[110px] pointer-events-none" />

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
              About Me
            </motion.h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto"
              initial={{ width: 0 }} whileInView={{ width: 64 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-background/80 backdrop-blur-sm border-border/60">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Who I Am</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Software Engineer with a strong foundation in Computer Science and Engineering.
                    Recently, I completed my BSc at International University of Business Agriculture and Technology (IUBAT)
                    with a <span className="font-semibold text-foreground">CGPA of 3.94</span>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in tech has been driven by a love for problem-solving and competitive programming.
                    With <span className="font-semibold text-foreground">900+ problems</span> solved across various platforms
                    and experience as an <span className="font-semibold text-foreground">ICPC Regionalist</span>,
                    I thrive on tackling complex algorithmic challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently, I am a backend-focused software engineer skilled in both backend development and mobile app development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I enjoy building innovative mobile and web applications that make a real-world impact,
                    from healthcare / e-commerce platforms to marketplace solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 group bg-background/80 backdrop-blur-sm border-border/60">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Current Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Software Engineer Intern</h3>
                    <p className="text-sm font-medium text-primary">Grameen HealthTech Limited</p>
                    <p className="text-sm text-muted-foreground">Shukhee Team</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Dhaka, Bangladesh
                    </p>
                    <p className="text-sm font-medium pt-2">October 2025 – January 2026</p>
                    <p className="text-sm text-muted-foreground pt-2 leading-relaxed">
                      Contributing to backend integration and microservices for the Shukhee healthcare platform.
                      Working with Node.js, Express.js, NestJS and PostgreSQL while advancing in Backend Development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-3">
                <GraduationCap className="h-7 w-7 text-primary" />
                Education
              </h3>
              <motion.div
                className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto"
                initial={{ width: 0 }} whileInView={{ width: 56 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full shrink-0">
                          <Trophy className="h-3 w-3 text-primary" />
                          <span className="text-xs font-bold text-primary">
                            {edu.gpa}/{edu.maxGpa}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground pt-1">{edu.period}</p>
                      {edu.group && (
                        <p className="text-xs text-primary font-medium">Group: {edu.group}</p>
                      )}
                      {edu.major && (
                        <p className="text-xs text-muted-foreground">Major: {edu.major}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
