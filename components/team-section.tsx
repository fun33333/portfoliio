"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Code, Palette, Server, Cpu } from "lucide-react"

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
    <section className="w-full section-padding container-padding relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 tech-grid opacity-15"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20 content-spacing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-tech font-bold text-foreground mb-8"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">&lt;</span>
            Meet Our Team
            <span className="text-primary font-mono">/&gt;</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-muted-foreground font-tech max-w-4xl mx-auto leading-relaxed">
            Four passionate friends who came together to create innovative digital solutions that make a difference.
            <br />
            <span className="text-primary font-mono text-base">Young • Talented • Creative • Dedicated</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Main card */}
              <motion.div
                className="glass-card p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden card-hover"
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  boxShadow: "0 40px 80px rgba(0, 0, 0, 0.3), 0 0 50px rgba(59, 130, 246, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Tech corners */}
                <div className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-5 h-5 border-l-2 border-b-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 w-5 h-5 border-r-2 border-b-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>

                {/* Profile section */}
                <div className="relative mb-8">
                  <motion.div
                    className="w-28 h-28 mx-auto rounded-2xl overflow-hidden bg-primary/10 border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-300 relative"
                    whileHover={{ rotate: 5 }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Floating icon */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <member.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Info */}
                <motion.h3
                  className="text-xl font-tech font-bold text-foreground mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-primary font-tech font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground font-mono text-xs mb-6 opacity-80">// {member.speciality}</p>
                <p className="text-sm text-muted-foreground font-tech leading-relaxed mb-8">{member.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-lg border border-primary/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-4">
                  {[
                    { icon: Github, href: member.social.github },
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Twitter, href: member.social.twitter },
                  ].map(({ icon: Icon, href }, socialIndex) => (
                    <motion.a
                      key={socialIndex}
                      href={href}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-xl flex items-center justify-center text-primary hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-2 -left-2 w-3 h-3 bg-primary rounded-full opacity-60"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-2 h-2 bg-primary rounded-full opacity-40"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Team stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 grid-gap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: "Projects Completed", value: "50+", icon: "🚀" },
            { label: "Happy Clients", value: "30+", icon: "😊" },
            { label: "Years Experience", value: "5+", icon: "⭐" },
            { label: "Technologies", value: "20+", icon: "⚡" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card p-6 rounded-xl border border-white/10 card-hover"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(59, 130, 246, 0.2)",
              }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-tech font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-tech">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
