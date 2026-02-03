"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Code, Palette, Server, Cpu } from "lucide-react"
import { TechBorder } from "./ui/tech-border"

const teamMembers = [
  {
    name: "Anoosh",
    role: "Co-Founder & Tech Lead",
    speciality: "AI & Automation",
    image: "/placeholder.svg?height=200&width=200",
    description: "Passionate about AI and automation solutions that transform businesses and drive innovation forward.",
    icon: Cpu,
    skills: ["Machine Learning", "Python", "TensorFlow", "AI Strategy"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Noman",
    role: "Co-Founder & Full-Stack Developer",
    speciality: "Web Development",
    image: "/placeholder.svg?height=200&width=200",
    description: "Expert in modern web technologies and scalable application architecture with focus on performance.",
    icon: Code,
    skills: ["React", "Node.js", "TypeScript", "Cloud Architecture"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Ubaid",
    role: "Co-Founder & Design Lead",
    speciality: "Creative Design",
    image: "/placeholder.svg?height=200&width=200",
    description: "Creative mind behind stunning visual designs and user experiences that captivate and convert.",
    icon: Palette,
    skills: ["UI/UX Design", "Branding", "Motion Graphics", "Creative Strategy"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Faizan",
    role: "Co-Founder & DevOps Engineer",
    speciality: "Infrastructure",
    image: "/placeholder.svg?height=200&width=200",
    description: "Infrastructure and deployment specialist ensuring seamless operations and maximum uptime.",
    icon: Server,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
]

export function TeamSection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      <TechBorder />
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Internal Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,175,167,0.08),transparent_70%)]" />

        {/* Dynamic Shining Highlight */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md"
          >
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
              OUR VISIONARIES
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-lastica text-[#172222] leading-[1.1] mb-8 uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            MEET OUR <span className="text-primary italic">ARCHITECTS</span> <br />
            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">DISRUPTING STATUS QUO</span>
          </motion.h2>

          <motion.p
            className="mt-8 max-w-4xl text-lg md:text-xl text-[#172222]/60 font-raleway font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A collective of four disruptive minds dedicated to engineering the next generation of digital infrastructure.
            Blending creativity with elite technical prowess to solve the unsolvable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Main Card */}
              <motion.div
                className="relative h-full p-8 rounded-[32px] overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(45,175,167,0.3)] bg-white border border-[#172222]/5"
                whileHover={{ y: -15 }}
              >
                {/* Internal Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Profile Section */}
                <div className="relative mb-8 text-center">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-[32px] overflow-hidden border-2 border-[#172222]/5 group-hover:border-primary/50 transition-all duration-500 relative bg-[#F8FFFE] p-1"
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-[28px]"
                    />
                  </motion.div>

                  {/* Specialty Badge */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#172222] text-white rounded-full flex items-center gap-2 shadow-lg border border-white/10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <member.icon size={12} className="text-primary" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{member.speciality}</span>
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="text-center mt-6">
                  <h3 className="text-xl font-lastica font-bold text-[#172222] uppercase tracking-tighter mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#172222]/60 font-raleway font-medium leading-relaxed mb-8 h-20">
                    {member.description}
                  </p>
                </div>

                {/* Skills Visualized */}
                <div className="flex flex-wrap gap-2 mb-10 justify-center">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#F8FFFE] text-[#172222]/70 text-[10px] font-mono font-bold rounded-lg border border-[#172222]/5 group-hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Actions */}
                <div className="flex justify-center gap-4 relative z-10">
                  {[
                    { icon: Github, href: member.social.github },
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Twitter, href: member.social.twitter },
                  ].map(({ icon: Icon, href }, socialIdx) => (
                    <motion.a
                      key={socialIdx}
                      href={href}
                      className="w-10 h-10 rounded-2xl bg-[#F8FFFE] flex items-center justify-center text-[#172222]/40 hover:text-primary transition-all duration-300 border border-[#172222]/5 hover:border-primary/30"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

