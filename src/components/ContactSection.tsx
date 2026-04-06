"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Mail, Linkedin, Github, Phone, Send, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"

export default function ContactSection() {
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

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors]     = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim())    newErrors.name    = "Name is required"
    if (!formData.email.trim())   newErrors.email   = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
    }
  }

  const contactInfo = [
    { icon: Mail,     label: "Email",    value: "mhr221official@gmail.com",  href: "mailto:mhr221official@gmail.com",  color: "hover:text-red-500"   },
    { icon: Phone,    label: "Phone",    value: "+880 1640 8633 79",          href: "tel:+8801640863379",               color: "hover:text-green-500" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rabbi221",   href: "https://linkedin.com/in/rabbi221", color: "hover:text-blue-600"  },
    { icon: Github,   label: "GitHub",   value: "github.com/mh-rabbi",        href: "https://github.com/mh-rabbi",      color: "hover:text-gray-800 dark:hover:text-gray-200" },
  ]

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rabbi221", color: "hover:bg-blue-600/10 hover:text-blue-600 hover:border-blue-600/50" },
    { icon: Github,   label: "GitHub",   href: "https://github.com/mh-rabbi",      color: "hover:bg-gray-800/10 hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-800/50" },
  ]

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">

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
      <div className="absolute top-20 left-[8%]   w-72 h-72 rounded-full bg-primary/8  blur-[85px]  pointer-events-none" />
      <div className="absolute bottom-16 right-[6%] w-80 h-80 rounded-full bg-cyan-500/8  blur-[90px]  pointer-events-none" />
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
              Get In Touch
            </motion.h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 rounded-full mx-auto mb-4"
              initial={{ width: 0 }} whileInView={{ width: 64 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                        <Send className="h-4 w-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Get in touch through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((contact, idx) => (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        whileHover={{ x: 5 }}
                        className={`flex items-center gap-3 p-3 rounded-lg border hover:border-primary transition-all group/item ${contact.color}`}
                      >
                        <contact.icon className="h-5 w-5" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-muted-foreground">{contact.label}</div>
                          <div className="text-sm font-medium truncate">{contact.value}</div>
                        </div>
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </motion.a>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <CardTitle>Connect on Social Media</CardTitle>
                    <CardDescription>Follow me for updates and tech content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all ${social.color}`}
                        >
                          <social.icon className="h-6 w-6" />
                          <span className="font-medium text-sm">{social.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Open to work */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      Open to <span className="font-semibold text-foreground">full-time opportunities</span>,{" "}
                      <span className="font-semibold text-foreground">freelance projects</span>, and{" "}
                      <span className="font-semibold text-foreground">collaborations</span>.
                      Let's build something amazing together!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
