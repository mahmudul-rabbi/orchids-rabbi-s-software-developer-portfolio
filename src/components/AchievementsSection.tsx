"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Trophy, Award, Medal, Star, FileText, X, Download, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

/* ─── Achievement cards data ─── */
const achievements = [
  {
    icon: Trophy,
    title: "ICPC Honourable Mention",
    description: "ICPC Dhaka Regional Contest 2023 – BUBT",
    team: "IUBAT_Fofular_Bots",
    year: "2023",
    color: "text-yellow-500",
    bgGlow: "group-hover:bg-yellow-500/10",
    rank: "Honourable Mention",
    pdfFile: "/cert-icpc-2023.pdf",
  },
  {
    icon: Medal,
    title: "Top 15th – IUBAT CPC",
    description: "IUBAT Collaborative Programming Contest",
    team: "IUBAT_Fofular_Bots",
    year: "2024",
    color: "text-blue-500",
    bgGlow: "group-hover:bg-blue-500/10",
    rank: "15th Place",
    pdfFile: "/cert-collaborative-contest.pdf",
  },
  {
    icon: Award,
    title: "Top 16th – Dhaka Hackathon",
    description: "Dhaka Divisional Hackathon 2024 Technocrats V.2",
    team: "IUBAT_SHADOW_MASK",
    year: "2024",
    color: "text-purple-500",
    bgGlow: "group-hover:bg-purple-500/10",
    rank: "16th Place",
    pdfFile: "/cert-hackathon.pdf",
  },
  {
    icon: Star,
    title: "22nd – UAP Programming Contest",
    description: "UAP Collaborative Programming Contest (Senior)",
    team: "IUBAT_Fofular_Bots",
    year: "2024",
    color: "text-green-500",
    bgGlow: "group-hover:bg-green-500/10",
    rank: "22nd Place",
    pdfFile: "/cert-uap-contest.pdf",
  },
  {
    icon: Trophy,
    title: "Academic Scholar",
    description: "5 times SGPA 4.00/4.00",
    team: "CGPA: 3.93",
    year: "2022–2025",
    color: "text-orange-500",
    bgGlow: "group-hover:bg-orange-500/10",
    rank: "Scholar",
    pdfFile: "/cert-scholar.pdf",
  },
  {
    icon: BookOpen,
    title: "Research Paper Publication",
    description: "Emotion Detection from Banglish Social Media Texts Using Transformer-Based Models",
    team: "Accepted | ICCIT | Not online yet",
    year: "2025",
    color: "text-cyan-500",
    bgGlow: "group-hover:bg-cyan-500/10",
    rank: "Published",
    pdfFile: "/cert-research-publication.pdf",
  },
]

/* ─── Certifications gallery data — PDF backed ─── */
const certifications = [
  {
    id: 1,
    title: "Mobile Application Development",
    issuer: "Digital Bangladesh – ICT Division",
    date: "Issued Jul 2025",
    pdf: "/prof-cert-mobile-dev.pdf",
    accent: "from-sky-500 to-blue-600",
    icon: "📱",
  },
  {
    id: 2,
    title: "Judge – CSE Battle of Intellects Spring 2025",
    issuer: "Department of CSE, IUBAT",
    date: "Issued 2025",
    pdf: "/prof-cert-judge.pdf",
    accent: "from-rose-500 to-pink-600",
    icon: "⚖️",
  },
  {
    id: 3,
    title: "Academic Mentor",
    issuer: "Department of CSE, IUBAT",
    date: "Issued 2023",
    pdf: "/prof-cert-academic-mentor.pdf",
    accent: "from-green-500 to-emerald-600",
    icon: "🎓",
  },
  {
    id: 4,
    title: "Academic Excellence – Scholar",
    issuer: "IUBAT – International University of Business Agriculture & Technology",
    date: "Issued 2024",
    pdf: "/prof-cert-scholar.pdf",
    accent: "from-orange-400 to-amber-500",
    icon: "⭐",
  },
  {
    id: 5,
    title: "ICPC Asia Dhaka Regional Contest 2023",
    issuer: "ICPC – International Collegiate Programming Contest",
    date: "Issued 2023",
    pdf: "/prof-cert-icpc.pdf",
    accent: "from-violet-500 to-purple-600",
    icon: "🏆",
  },
  {
    id: 6,
    title: "National Innovation Competition – Technocrats V.2",
    issuer: "IIEC – IUBAT Innovation & Entrepreneurship Center",
    date: "Issued 2024",
    pdf: "/prof-cert-hackathon.pdf",
    accent: "from-teal-500 to-cyan-600",
    icon: "💡",
  },
]

/* ─── Problem-solving platforms ─── */
const platforms = [
  {
    name: "Codeforces",
    username: "MHR_",
    profileUrl: "https://codeforces.com/profile/MHR_",
    solved: 600,
    extras: [
      { label: "Max Rating", value: "1203" },
      { label: "Rank",       value: "Pupil" },
      { label: "Rated Contests", value: "70" },
    ],
    rankBadge: "Pupil",
    rankColor: "bg-green-500/15 text-green-500 border-green-500/30",
    accentColor: "from-red-500 to-orange-500",
    glowColor: "rgba(239,68,68,0.15)",
    // Official Codeforces logo SVG inline
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1"  y="12" width="5" height="11" rx="1" fill="#1194F1"/>
        <rect x="9"  y="6"  width="5" height="17" rx="1" fill="#EF3B24"/>
        <rect x="17" y="1"  width="5" height="22" rx="1" fill="#1194F1"/>
      </svg>
    ),
  },
  {
    name: "LeetCode",
    username: "MHR_221",
    profileUrl: "https://leetcode.com/u/MHR_221/",
    solved: 104,
    extras: [
      { label: "Rank", value: "1,423,255" },
    ],
    rankBadge: "Active",
    rankColor: "bg-orange-500/15 text-orange-500 border-orange-500/30",
    accentColor: "from-orange-400 to-yellow-500",
    glowColor: "rgba(249,115,22,0.15)",
    logo: (
      <svg viewBox="0 0 95 111" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68.0,84.0 L30.0,84.0 C26.7,84.0 24.0,81.3 24.0,78.0 L24.0,33.0 C24.0,29.7 26.7,27.0 30.0,27.0 L55.0,27.0 L74.0,46.0 L74.0,78.0 C74.0,81.3 71.3,84.0 68.0,84.0 Z" fill="#B3B3B3"/>
        <path d="M55.0,27.0 L55.0,46.0 L74.0,46.0 Z" fill="#808080"/>
        <path d="M34.0,56.0 L54.0,56.0" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M34.0,64.0 L62.0,64.0" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <path d="M34.0,72.0 L50.0,72.0" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        {/* LeetCode actual logo mark */}
        <path fillRule="evenodd" clipRule="evenodd" d="M47.5 0C21.3 0 0 21.3 0 47.5S21.3 95 47.5 95 95 73.7 95 47.5 73.7 0 47.5 0zm0 8.5c21.5 0 39 17.5 39 39S69 86.5 47.5 86.5s-39-17.5-39-39 17.5-39 39-39z" fill="#FFA116" opacity="0.15"/>
        <path d="M62.6 28.3L45.1 45.8c-.8.8-.8 2 0 2.8l5.7 5.7c.8.8 2 .8 2.8 0l17.5-17.5c.8-.8.8-2 0-2.8l-5.7-5.7c-.8-.8-2-.8-2.8 0z" fill="#FFA116"/>
        <path d="M28.3 47.5H51c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H28.3c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z" fill="#B3B3B3"/>
      </svg>
    ),
  },
  {
    name: "VJudge",
    username: "rabbi0123",
    profileUrl: "https://vjudge.net/user/rabbi0123",
    solved: 139,
    extras: [
      { label: "Note", value: "Problem Setter" },
    ],
    rankBadge: "Active",
    rankColor: "bg-purple-500/15 text-purple-500 border-purple-500/30",
    accentColor: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.15)",
    logo: (
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#6d28d9" opacity="0.15" stroke="#7c3aed" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#7c3aed" fontFamily="monospace">VJ</text>
        <text x="50" y="62" textAnchor="middle" fontSize="13" fill="#a78bfa" fontFamily="monospace">udge</text>
      </svg>
    ),
  },
]

/* ═══════════════════════════════════════════ */
export default function AchievementsSection() {
  const [openAchPdf, setOpenAchPdf]       = useState<string | null>(null)
  const [openProfCert, setOpenProfCert]   = useState<typeof certifications[0] | null>(null)
  const [mounted, setMounted]             = useState(false)
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

  const downloadPdf = (path: string, name: string) => {
    const a = document.createElement("a")
    a.href = path; a.download = name
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
  }

  return (
    <section id="achievements" className="relative py-20 px-4 overflow-hidden">

      {/* ── Hero-matching background ── */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-muted/10" style={{ x: sx, y: sy }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(to right,currentColor 1px,transparent 1px),linear-gradient(to bottom,currentColor 1px,transparent 1px)", backgroundSize: "60px 60px" }}
      />
      <div className="absolute top-16 right-[8%]  w-80 h-80 rounded-full bg-yellow-500/6  blur-[90px]  pointer-events-none" />
      <div className="absolute bottom-20 left-[6%] w-72 h-72 rounded-full bg-cyan-500/8   blur-[85px]  pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{
                width: Math.random() * 5 + 2, height: Math.random() * 5 + 2,
                background: i % 3 === 0 ? "rgba(139,92,246,0.3)" : i % 3 === 1 ? "rgba(6,182,212,0.3)" : "rgba(236,72,153,0.2)",
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -(Math.random() * 95 + 45), 0], x: [0, (Math.random() - 0.5) * 60, 0], opacity: [0.1, 0.65, 0.1] }}
              transition={{ duration: Math.random() * 11 + 14, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 8 }}
            />
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

          {/* Heading */}
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              Achievements &amp; Statistics
            </motion.h2>
            <motion.div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto"
              initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} />
          </div>

          {/* ── Achievement cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mb-16">
            {achievements.map((ach, idx) => (
              <motion.div key={ach.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }} whileHover={{ y: -6, scale: 1.02 }}
              >
                <Card className={`text-center hover:shadow-xl transition-all duration-300 group h-full bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden`}>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardContent className="pt-6 pb-5 space-y-3 relative">
                    {/* Icon */}
                    <motion.div className="flex justify-center" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <div className={`p-3 bg-muted rounded-full transition-colors duration-300 ${ach.bgGlow}`}>
                        <ach.icon className={`h-8 w-8 ${ach.color}`} />
                      </div>
                    </motion.div>

                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors">{ach.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{ach.description}</p>
                    <p className="text-xs font-medium text-primary">{ach.team}</p>

                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <Badge variant="secondary">{ach.year}</Badge>
                      <Badge variant="outline" className="border-primary/50">{ach.rank}</Badge>
                    </div>

                    {/* View PDF certificate button */}
                    <motion.button
                      onClick={() => setOpenAchPdf(ach.pdfFile)}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-primary transition-colors mt-1 border border-primary/20 hover:border-primary/50 rounded-full px-3 py-1"
                    >
                      <FileText className="h-3 w-3" />
                      View Certificate
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* ── Professional Certifications Gallery ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Certifications</h3>
              <motion.div
                className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto mb-3"
                initial={{ width: 0 }} whileInView={{ width: 48 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              />
              <p className="text-muted-foreground text-sm">Click any card to view the certificate PDF</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {certifications.map((cert, idx) => (
                <motion.button
                  key={cert.id}
                  onClick={() => setOpenProfCert(cert)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-left w-full group"
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden cursor-pointer">
                    {/* Gradient top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* PDF preview area */}
                    <div className={`relative h-36 bg-gradient-to-br ${cert.accent} overflow-hidden flex items-center justify-center`}>
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                          backgroundSize: "18px 18px",
                        }}
                      />
                      {/* Big emoji icon */}
                      <span className="text-5xl z-10 drop-shadow-lg select-none">{cert.icon}</span>
                      {/* PDF label badge */}
                      <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 py-0.5 flex items-center gap-1">
                        <FileText className="h-3 w-3 text-white" />
                        <span className="text-white text-[10px] font-bold">PDF</span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-2.5 shadow-lg">
                          <FileText className="h-5 w-5 text-gray-800" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-4 pb-4 space-y-2">
                      <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {cert.issuer}
                      </p>
                      <Badge variant="outline" className="text-[10px] mt-1">{cert.date}</Badge>
                    </CardContent>
                  </Card>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ── Problem Solving Statistics ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">Problem Solving Statistics</h3>
              <motion.div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto"
                initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {platforms.map((p, idx) => (
                <motion.a key={p.name} href={p.profileUrl} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }} whileHover={{ y: -8, scale: 1.03 }}
                  className="block"
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden h-full">
                    {/* Top gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${p.glowColor} 0%, transparent 60%)` }} />

                    <CardHeader className="pb-3">
                      {/* Logo (right) + name/username (left) */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className={`text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${p.accentColor} transition-all duration-300`}>
                            {p.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-0.5 font-mono">@{p.username}</p>
                        </div>
                        {/* Platform logo */}
                        <div className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                          {p.logo}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3 pt-0">
                      {/* Problems solved — big number */}
                      <div className="flex items-end gap-2 pb-2 border-b border-border/50">
                        <span className={`text-4xl font-extrabold bg-gradient-to-r ${p.accentColor} bg-clip-text text-transparent`}>
                          {p.solved}
                        </span>
                        <span className="text-muted-foreground text-sm mb-1">problems solved</span>
                      </div>

                      {/* Extra details */}
                      <div className="space-y-1.5">
                        {p.extras.map((ex) => (
                          <div key={ex.label} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{ex.label}</span>
                            <span className="font-semibold text-foreground/80 text-right max-w-[55%] truncate">{ex.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Rank badge */}
                      <div className="pt-1">
                        <Badge variant="outline" className={`${p.rankColor} font-semibold`}>
                          {p.rankBadge}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Professional Cert PDF modal ── */}
      {openProfCert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setOpenProfCert(null)}
        >
          <motion.div
            className="relative bg-background rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col"
            style={{ maxHeight: "94vh" }}
            initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.26 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-5 py-3 shrink-0 bg-gradient-to-r ${openProfCert.accent}`}>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{openProfCert.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm leading-tight">{openProfCert.title}</p>
                  <p className="text-white/75 text-xs">{openProfCert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => downloadPdf(openProfCert.pdf, `${openProfCert.title}.pdf`)}
                  whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </motion.button>
                <button
                  onClick={() => setOpenProfCert(null)}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF iframe — fills all remaining height */}
            <div className="flex-1 min-h-0 bg-gray-100 dark:bg-gray-900">
              <iframe
                key={openProfCert.pdf}
                src={`${openProfCert.pdf}#toolbar=1&view=FitH`}
                className="w-full h-full"
                style={{ minHeight: "60vh", border: "none", display: "block" }}
                title={openProfCert.title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ── Achievement PDF viewer modal ── */}
      {openAchPdf && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setOpenAchPdf(null)}
        >
          <motion.div
            className="relative bg-background rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl flex flex-col"
            style={{ maxHeight: "92vh" }}
            initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.27 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-bold text-base">Certificate</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => downloadPdf(openAchPdf, openAchPdf.split("/").pop() ?? "certificate.pdf")}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="h-4 w-4" /> Download
                </motion.button>
                <button
                  onClick={() => setOpenAchPdf(null)}
                  className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 overflow-auto min-h-0">
              <iframe
                src={openAchPdf}
                className="w-full"
                style={{ height: "70vh", border: "none" }}
                title="Certificate PDF"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
