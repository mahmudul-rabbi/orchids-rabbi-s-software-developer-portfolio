"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ExternalLink, Github, Smartphone, Monitor, Globe, Server } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "eCommerce Solution of Used Car & Bike",
    description: "A robust and scalable NestJS backend for an e-commerce platform dealing with used cars and bikes, featuring a full REST API with WebSocket integration for real-time updates, structured user, vehicle, and payment management, and secure entity relations.",
    // Used cars / automotive marketplace — car lot / dealership
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
    tech: ["TypeScript", "NestJS", "MySQL", "WebSocket"],
    platform: "Backend",
    type: "E-commerce Backend",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/Backend-eCommerce-Solution-of-used-Car-bike",
  },
  {
    title: "GaariHaat App",
    description: "A full-stack vehicle marketplace ecosystem featuring real-time listings, secure JWT authentication, SSLCommerz payment integration, favorites, profile & listing management, backed by a NestJS REST & WebSocket API and a dedicated admin panel for complete marketplace control.",
    // Car marketplace mobile app — cars on a road / showroom
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    tech: ["Flutter", "GetX", "MySQL", "Socket.IO"],
    platform: "Android/iOS/Web",
    type: "Mobile E-Commerce App",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/eCommerce-solution-for-used-car-bike",
  },
  {
    title: "Admin Portal — GaariHaat",
    description: "GaariHaat Admin Portal is a powerful, modern web application built with React, TypeScript, and shadcn/ui. Provides comprehensive tools to manage vehicles, users, payments, and analytics for the GaariHaat vehicle marketplace platform.",
    // Admin dashboard / analytics panel
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Shadcn/ui"],
    platform: "Web",
    type: "Admin Web Portal",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/Admin-Portal-eCommerce-solution-for-used-car-bike",
  },
  {
    title: "WorkPulse API",
    description: "A production-grade workforce management REST API featuring JWT authentication with rate-limited login, employee CRUD with photo upload, attendance tracking with upsert logic, and monthly attendance reporting — built with a scalable controller–service–repository architecture.",
    // HR / workforce management — people working in office
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Knex", "Joi"],
    platform: "Backend",
    type: "HR Management API",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/HR-Management-Backend",
  },
  {
    title: "Personalized Recommendation API",
    description: "A production-ready, scalable recommendation API built with FastAPI following Clean Architecture principles. Delivers intelligent, personalized product recommendations based on user behavior, demographics, and engagement patterns.",
    // AI / recommendation engine — neural network / data science
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    platform: "Backend",
    type: "Recommendation Engine",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/Personalized-Recommendation-API",
  },
  {
    title: "eGuidance App",
    description: "A comprehensive mobile application connecting users with doctors for mental health support. Features role-based access (admin, doctor, user), real-time chat, appointment booking, user profile management, doctor approval system, and health condition awareness resources.",
    // Mental health / doctor consultation mobile app
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    tech: ["Java", "Firebase", "XML"],
    platform: "Android",
    type: "Mobile Health App",
    demoLink: "https://youtu.be/q9ghzHS4LCw",
    githubLink: "https://github.com/mh-rabbi/eGuidance-App",
  },
  {
    title: "GariBD App",
    description: "A responsive Android marketplace for second-hand cars and bikes in Bangladesh. Features user authentication, dynamic listings with image uploads, advanced filters, favorites system, support email integration, profile management, and smooth navigation.",
    // Second-hand cars — used car lot
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    tech: ["Java", "Volley", "XML"],
    platform: "Android",
    type: "E-Commerce Mobile App",
    demoLink: "https://youtu.be/fk8tnTEmtfU",
    githubLink: "https://github.com/mh-rabbi/GariBD-App",
  },
  {
    title: "GroceryList App",
    description: "A user-friendly Android application for managing daily grocery lists, featuring intuitive add, update, delete operations, and local data storage with SQLite database for offline access.",
    // Grocery / supermarket — vegetables & fruits
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
    tech: ["Java", "SQLite", "XML"],
    platform: "Android",
    type: "Mobile Utility App",
    demoLink: "https://youtube.com/shorts/iJnfj1JN5Ec?feature=share",
    githubLink: "https://github.com/mh-rabbi/GroceryList-App",
  },
  {
    title: "DoodleDo App",
    description: "A cross-platform app for organizing daily tasks, supporting smooth task creation, editing, and deletion. Uses Hive for lightweight, high-performance local storage, ensuring fast offline access with a clean and intuitive UI.",
    // To-do / task management — checklist / planning
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tech: ["Flutter", "Dart", "Hive"],
    platform: "Android/iOS",
    type: "Task Management App",
    demoLink: "https://youtube.com/shorts/qZMq1DiZyOo?feature=share",
    githubLink: "https://github.com/mh-rabbi/Todo-App",
  },
  {
    title: "Netgate-BD: E-Learning Platform",
    description: "Developed a full-featured E-Learning Management System with role-based authentication (Admin, Instructor, Student). Implemented dynamic course management, live class integration, user profile dashboards, and a centralized admin panel.",
    // E-learning / online education — student on laptop
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tech: ["HTML", "CSS", "PHP", "JavaScript"],
    platform: "Web",
    type: "Full-Stack Web App",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/e-learning-platform",
  },
  {
    title: "Virtual Remote Guidance & Counseling",
    description: "Engineered a secure web application for mental health support. Facilitates user registration, login, appointment booking with doctors, and a preliminary mental health assessment through interactive quizzes backed by a MySQL database.",
    // Counseling / therapy / mental wellness
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    platform: "Web",
    type: "Healthcare Web App",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/Database_Project_VRGC",
  },
  {
    title: "Cafeteria Management System",
    description: "Built a robust desktop application applying OOP principles. Features dynamic menu management, real-time user interaction, and efficient data handling using C++ STL for optimized performance.",
    // Cafeteria / food service
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
    tech: ["C++", "STL"],
    platform: "Desktop",
    type: "Management System",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/Cafeteria_Management_Project",
  },
  {
    title: "Online Bus Ticket System",
    description: "Simulates a bus ticket booking and cancellation system using C++. Users can view available bus details, book tickets, and cancel bookings. Employs OOP concepts including classes, inheritance, encapsulation, and polymorphism.",
    // Bus / transportation ticketing
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    tech: ["C++", "STL"],
    platform: "Desktop",
    type: "Ticket Booking System",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/Online_Bus_Ticket_System_Project-in-cpp",
  },
  {
    title: "Snake Game",
    description: "Created a classic Snake Game in Java emphasizing OOP concepts like inheritance and polymorphism. Implemented smooth animations, collision detection, a dynamic scoring system, and optimized game loop logic for a seamless user experience.",
    // Retro game / gaming setup
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    tech: ["Java"],
    platform: "Desktop",
    type: "Game Development",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/Snake_Game_Project",
  },
  {
    title: "Calculator App",
    description: "Designed and developed a user-friendly Android application with a clean, intuitive XML interface. Implements all basic arithmetic operations with reliable Java logic for a smooth and responsive calculation experience.",
    // Calculator / math app
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    tech: ["Java", "XML"],
    platform: "Android",
    type: "Utility Mobile App",
    demoLink: "#",
    githubLink: "https://github.com/mh-rabbi/BasicCalculator-App",
  },
]

function getPlatformIcon(platform: string) {
  if (platform === "Android" || platform === "Android/iOS" || platform === "Android/iOS/Web") return Smartphone
  if (platform === "Web") return Globe
  if (platform === "Backend") return Server
  return Monitor
}

// platform badge color map
const platformColor: Record<string, string> = {
  "Android":         "from-green-500 to-emerald-600",
  "Android/iOS":     "from-sky-500 to-blue-600",
  "Android/iOS/Web": "from-violet-500 to-purple-600",
  "Web":             "from-blue-500 to-cyan-600",
  "Backend":         "from-orange-500 to-amber-600",
  "Desktop":         "from-slate-500 to-gray-600",
}

export default function ProjectsSection() {
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
    <section id="projects" className="relative py-24 px-4 overflow-hidden">

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
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-24 right-[8%] w-96 h-96 rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
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
                y:       [0, -(Math.random() * 100 + 50), 0],
                x:       [0,  (Math.random() - 0.5) * 60,  0],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 14,
                repeat:   Infinity,
                ease:     "easeInOut",
                delay:    Math.random() * 8,
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
          <div className="text-center mb-14">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto mb-4"
              initial={{ width: 0 }} whileInView={{ width: 80 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building innovative applications across web, mobile, backend, and desktop platforms
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {projects.map((project, idx) => {
              const PlatformIcon = getPlatformIcon(project.platform)
              const gradClass = platformColor[project.platform] ?? "from-primary to-cyan-500"
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-400 overflow-hidden border border-border/60 bg-background/80 backdrop-blur-sm relative">

                    {/* Top gradient accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Image */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-600"
                      />
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                      {/* Platform badge */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${gradClass} shadow-lg backdrop-blur-sm`}>
                          <PlatformIcon className="h-3 w-3" />
                          {project.platform}
                        </span>
                      </div>

                      {/* Type badge bottom-left */}
                      <div className="absolute bottom-2.5 left-2.5">
                        <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-base group-hover:text-primary transition-colors duration-200 leading-snug">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 mt-1 text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 pb-5">
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.1 }}
                            className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium border border-primary/20 bg-primary/5 text-primary/80 hover:bg-primary/15 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2 pt-1">
                        {project.demoLink !== "#" ? (
                          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1">
                            <Button size="sm" variant="outline" className="gap-1.5 w-full text-xs h-8 hover:bg-primary/10 hover:border-primary/40 transition-all" asChild>
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3.5 w-3.5" /> Demo
                              </a>
                            </Button>
                          </motion.div>
                        ) : (
                          <div className="flex-1">
                            <Button size="sm" variant="ghost" className="gap-1.5 w-full text-xs h-8 text-muted-foreground cursor-not-allowed opacity-50" disabled>
                              <ExternalLink className="h-3.5 w-3.5" /> Demo
                            </Button>
                          </div>
                        )}
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1">
                          <Button size="sm" variant="outline" className="gap-1.5 w-full text-xs h-8 hover:bg-primary/10 hover:border-primary/40 transition-all" asChild>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3.5 w-3.5" /> Code
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
