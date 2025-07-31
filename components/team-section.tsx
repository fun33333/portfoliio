"use client"

import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Anoosh",
    role: "Co-Founder & Tech Lead",
    image: "/placeholder.svg?height=120&width=120",
    description: "Passionate about AI and automation solutions",
  },
  {
    name: "Noman",
    role: "Co-Founder & Full-Stack Developer",
    image: "/placeholder.svg?height=120&width=120",
    description: "Expert in modern web technologies",
  },
  {
    name: "Ubaid",
    role: "Co-Founder & Design Lead",
    image: "/placeholder.svg?height=120&width=120",
    description: "Creative mind behind stunning visual designs",
  },
  {
    name: "Faizan",
    role: "Co-Founder & DevOps Engineer",
    image: "/placeholder.svg?height=120&width=120",
    description: "Infrastructure and deployment specialist",
  },
]

export function TeamSection() {
  return (
    <section className="w-full px-5 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four passionate friends who came together to create innovative digital solutions. Young, talented, and
            creative - delivering excellence in every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
