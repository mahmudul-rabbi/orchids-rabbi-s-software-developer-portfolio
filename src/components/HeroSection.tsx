"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

const ORBIT_BADGES = [
  { label: "Competitive Programmer", color: "from-violet-500 to-purple-600",  glowColor: "rgba(139,92,246,0.7)",  startDeg: 0,   duration: 18 },
  { label: "Problem Solver",         color: "from-emerald-500 to-green-600",  glowColor: "rgba(16,185,129,0.7)",  startDeg: 60,  duration: 18 },
  { label: "NestJS",                 color: "from-red-500 to-rose-600",       glowColor: "rgba(239,68,68,0.7)",   startDeg: 120, duration: 18 },
  { label: "Flutter",                color: "from-sky-400 to-cyan-500",       glowColor: "rgba(56,189,248,0.7)",  startDeg: 180, duration: 18 },
  { label: "Java",                   color: "from-orange-400 to-red-500",     glowColor: "rgba(251,146,60,0.7)",  startDeg: 240, duration: 18 },
  { label: "Next.js",                color: "from-indigo-500 to-purple-600",  glowColor: "rgba(99,102,241,0.7)",  startDeg: 300, duration: 18 },
]

const TYPING_TITLES = ["Software Engineer", "Backend Developer", "Mobile App Developer"]

export default function HeroSection() {
  const [mounted, setMounted]       = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplay]   = useState("")
  const [isDeleting, setDeleting]   = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  // responsive orbit size
  const [orbitSize, setOrbitSize]   = useState(380)
  const [photoSize, setPhotoSize]   = useState(190)
  const [orbitR, setOrbitR]         = useState(175)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sx = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const sy = useSpring(mouseY, { damping: 25, stiffness: 150 })
  const tx = useTransform(sx, [-20, 20], [-6, 6])
  const ty = useTransform(sy, [-20, 20], [-6, 6])

  useEffect(() => {
    setMounted(true)
    const resize = () => {
      const w = window.innerWidth
      if (w < 360) {
        setOrbitSize(270); setPhotoSize(130); setOrbitR(120)
      } else if (w < 480) {
        setOrbitSize(300); setPhotoSize(148); setOrbitR(135)
      } else if (w < 640) {
        setOrbitSize(330); setPhotoSize(162); setOrbitR(150)
      } else if (w < 768) {
        setOrbitSize(360); setPhotoSize(176); setOrbitR(165)
      } else {
        setOrbitSize(420); setPhotoSize(210); setOrbitR(195)
      }
    }
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  // Typing effect
  useEffect(() => {
    if (!mounted) return
    const word = TYPING_TITLES[titleIndex]
    let t: ReturnType<typeof setTimeout>
    if (!isDeleting && displayText.length < word.length) {
      t = setTimeout(() => setDisplay(word.slice(0, displayText.length + 1)), 85)
    } else if (!isDeleting && displayText.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2000)
    } else if (isDeleting && displayText.length > 0) {
      t = setTimeout(() => setDisplay(displayText.slice(0, -1)), 45)
    } else {
      setDeleting(false)
      setTitleIndex((p) => (p + 1) % TYPING_TITLES.length)
    }
    return () => clearTimeout(t)
  }, [mounted, displayText, isDeleting, titleIndex])

  // Mouse parallax — desktop only
  useEffect(() => {
    if (!mounted) return
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth  - 0.5) * 20)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mounted, mouseX, mouseY])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const downloadCV = () => {
    const a = document.createElement("a")
    a.href = "/Md. Mahmudul Hasan Rabbi.pdf"
    a.download = "Md. Mahmudul Hasan Rabbi.pdf"
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden"
    >
      {/* Parallax bg */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-muted/10" style={{ x: sx, y: sy }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(to right,currentColor 1px,transparent 1px),linear-gradient(to bottom,currentColor 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{
                width: Math.random() * 5 + 2, height: Math.random() * 5 + 2,
                background: i % 3 === 0 ? "rgba(139,92,246,0.35)" : i % 3 === 1 ? "rgba(6,182,212,0.35)" : "rgba(236,72,153,0.25)",
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -(Math.random() * 120 + 60), 0], x: [0, (Math.random() - 0.5) * 80, 0], opacity: [0.15, 0.75, 0.15] }}
              transition={{ duration: Math.random() * 12 + 14, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 6 }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto relative z-10 w-full max-w-6xl">
        {/* Stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Photo — top on mobile, right on desktop ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center items-center order-1 md:order-2 w-full"
          >
            <motion.div style={{ x: tx, y: ty }} className="relative flex items-center justify-center">
              {mounted && (
                <div className="relative" style={{ width: orbitSize, height: orbitSize }}>

                  {/* Dashed orbit ring */}
                  <div className="absolute rounded-full border border-dashed border-primary/20 pointer-events-none"
                    style={{ width: orbitSize - 16, height: orbitSize - 16, top: 8, left: 8 }} />

                  {/* Glow halos */}
                  {[
                    { inset: -8,  color: "border-primary/25",    dur: 3,   delay: 0   },
                    { inset: -22, color: "border-cyan-500/18",   dur: 4.2, delay: 0.6 },
                    { inset: -36, color: "border-violet-500/12", dur: 5.5, delay: 1.2 },
                  ].map((r, i) => (
                    <motion.div key={i} className={`absolute rounded-full border ${r.color} pointer-events-none`}
                      style={{ inset: `${r.inset}px` }}
                      animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: r.dur, repeat: Infinity, ease: "easeInOut", delay: r.delay }}
                    />
                  ))}

                  {/* Animated halo blur */}
                  <motion.div className="absolute pointer-events-none rounded-full"
                    style={{ inset: "15%", background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(6,182,212,0.2) 50%, transparent 80%)", filter: "blur(28px)" }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7], rotate: [0, 180, 360] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Profile photo */}
                  <div className="absolute rounded-full overflow-hidden border-4 border-background shadow-2xl ring-2 ring-primary/30"
                    style={{ width: photoSize, height: photoSize, top: orbitSize / 2 - photoSize / 2, left: orbitSize / 2 - photoSize / 2, zIndex: 10 }}
                  >
                    <Image src="/profile-photo.jpg" alt="Md. Mahmudul Hasan Rabbi" fill className="object-cover object-top" priority />
                  </div>

                  {/* Orbiting Badges */}
                  {ORBIT_BADGES.map((badge, i) => (
                    <OrbitBadge key={i} badge={{ ...badge, orbitR }} center={orbitSize / 2} />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* ── Text — bottom on mobile, left on desktop ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 order-2 md:order-1 text-center md:text-left w-full"
          >
            <div className="space-y-2">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                className="text-primary font-medium text-base sm:text-lg">
                Hello, I&apos;m
              </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-foreground/80 to-primary bg-clip-text text-transparent">
                Md. Mahmudul<br />Hasan Rabbi
              </motion.h1>

              {/* Typing */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="h-9 sm:h-10 flex items-center justify-center md:justify-start text-xl sm:text-2xl md:text-3xl font-semibold">
                <span className="bg-gradient-to-r from-primary via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.75, repeatType: "reverse" }}
                  className="ml-0.5 text-primary">|</motion.span>
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto md:mx-0 leading-relaxed">
                Passionate problem solver · 900+ problems solved · ICPC Regionalist
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={() => scrollTo("contact")} className="gap-2 shadow-lg shadow-primary/25 text-sm sm:text-base">
                  <Mail className="h-4 w-4" /> Contact Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" onClick={() => setResumeOpen(true)} className="gap-2 text-sm sm:text-base">
                  <FileText className="h-4 w-4" /> View Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Social */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex gap-3 pt-1 justify-center md:justify-start">
              {[
                { href: "https://github.com/mh-rabbi",      Icon: Github,   label: "GitHub"   },
                { href: "https://linkedin.com/in/rabbi221", Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-200">
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
              onClick={() => scrollTo("about")}
              className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group mt-1">
              Scroll to explore
              <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Resume PDF Modal */}
      {resumeOpen && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setResumeOpen(false)}>
          <motion.div className="relative bg-background rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl flex flex-col"
            style={{ maxHeight: "92vh" }}
            initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="h-5 w-5 text-primary shrink-0" />
                <span className="font-bold text-sm sm:text-base truncate">Resume — Md. Mahmudul Hasan Rabbi</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                <motion.button onClick={downloadCV} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  <Download className="h-4 w-4" /> Download
                </motion.button>
                <button onClick={() => setResumeOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground shrink-0">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto min-h-0">
              <iframe src="/Md. Mahmudul Hasan Rabbi.pdf" className="w-full" style={{ height: "80vh", border: "none" }} title="Resume" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

/* ── OrbitBadge ── */
type BadgeCfg = { label: string; color: string; glowColor: string; startDeg: number; orbitR: number; duration: number }

function OrbitBadge({ badge, center }: { badge: BadgeCfg; center: number }) {
  // Scale badge text on very small screens
  const small = center < 160

  return (
    <motion.div
      style={{ position: "absolute", top: center, left: center, width: 0, height: 0, transformOrigin: "0 0", rotate: badge.startDeg, zIndex: 20 }}
      animate={{ rotate: badge.startDeg + 360 }}
      transition={{ duration: badge.duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        style={{ position: "absolute", top: -badge.orbitR, left: 0, translateX: "-50%", rotate: -(badge.startDeg), transformOrigin: "50% 50%" }}
        animate={{ rotate: -(badge.startDeg + 360) }}
        transition={{ duration: badge.duration, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.18 }}
      >
        <span
          className={`inline-flex items-center gap-1 ${small ? "px-2 py-1 text-[9px]" : "px-3 py-1.5 text-xs"} rounded-full font-bold text-white whitespace-nowrap bg-gradient-to-r ${badge.color} cursor-default select-none`}
          style={{ boxShadow: `0 0 14px 3px ${badge.glowColor}, 0 0 4px 1px ${badge.glowColor}, 0 2px 8px rgba(0,0,0,0.4)` }}
        >
          {badge.label}
        </span>
      </motion.div>
    </motion.div>
  )
}
