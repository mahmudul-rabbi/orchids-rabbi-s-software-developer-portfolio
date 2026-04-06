"use client"

import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import AchievementsSection from "@/components/AchievementsSection"
import ContactSection from "@/components/ContactSection"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 px-4 border-t"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Md. Mahmudul Hasan Rabbi. All rights reserved.
            </p>
            <motion.p 
              className="text-muted-foreground text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.span> using Next.js & Framer Motion
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}