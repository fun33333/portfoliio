"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TerminalAnimation() {
  const [currentLine, setCurrentLine] = useState(0)
  const [isBooting, setIsBooting] = useState(true)

  const bootSequence = [
    "Initializing Quadgentics AI System...",
    "Loading neural networks... ✓",
    "Connecting to cloud infrastructure... ✓",
    "Starting development environment... ✓",
    "AI Assistant ready for deployment ✓",
  ]

  const codeLines = [
    "const quadgentics = new AICompany({",
    "  services: ['AI', 'Web', 'Design', 'DevOps'],",
    "  founders: ['Anoosh', 'Noman', 'Ubaid', 'Faizan'],",
    "  mission: 'Transform businesses digitally',",
    "  approach: 'Creative + Modern Technology'",
    "});",
    "",
    "quadgentics.deploy().then(() => {",
    "  console.log('🚀 Ready to innovate!');",
    "});",
  ]

  useEffect(() => {
    if (isBooting) {
      const bootTimer = setTimeout(() => {
        if (currentLine < bootSequence.length - 1) {
          setCurrentLine(currentLine + 1)
        } else {
          setIsBooting(false)
          setCurrentLine(0)
        }
      }, 800)
      return () => clearTimeout(bootTimer)
    } else {
      const codeTimer = setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % codeLines.length)
      }, 1000)
      return () => clearTimeout(codeTimer)
    }
  }, [currentLine, isBooting])

  return (
    <div className=""></div>
    // <div className="w-full max-w-4xl mx-auto">
    //   <motion.div
    //     className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     viewport={{ once: true }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     {/* Terminal header */}
    //     <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-b border-primary/20">
    //       <div className="flex items-center gap-3">
    //         <div className="flex gap-2">
    //           <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
    //           <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
    //           <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
    //         </div>
    //         <span className="text-primary/80 font-mono text-sm">{isBooting ? "system-boot" : "quadgentics-ai"}</span>
    //       </div>
    //       <div className="text-primary/60 font-mono text-xs">{isBooting ? "INITIALIZING..." : "READY"}</div>
    //     </div>

    //     {/* Terminal content */}
    //     <div className="p-6 font-mono text-sm min-h-[300px]">
    //       {isBooting ? (
    //         <div className="space-y-3">
    //           {bootSequence.slice(0, currentLine + 1).map((line, index) => (
    //             <motion.div
    //               key={index}
    //               className="flex items-center gap-2"
    //               initial={{ opacity: 0, x: -20 }}
    //               animate={{ opacity: 1, x: 0 }}
    //               transition={{ duration: 0.5 }}
    //             >
    //               <span className="text-primary">$</span>
    //               <span className="text-green-400">{line}</span>
    //             </motion.div>
    //           ))}
    //           {currentLine < bootSequence.length - 1 && (
    //             <motion.div
    //               className="flex items-center gap-2"
    //               animate={{ opacity: [1, 0, 1] }}
    //               transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
    //             >
    //               <span className="text-primary">$</span>
    //               <span className="text-primary">█</span>
    //             </motion.div>
    //           )}
    //         </div>
    //       ) : (
    //         <div className="space-y-2">
    //           {codeLines.slice(0, currentLine + 1).map((line, index) => (
    //             <motion.div
    //               key={index}
    //               className="flex"
    //               initial={{ opacity: 0, x: -10 }}
    //               animate={{ opacity: 1, x: 0 }}
    //               transition={{ duration: 0.3, delay: index * 0.1 }}
    //             >
    //               <span className="text-primary/60 w-8 text-right mr-4">{index + 1}</span>
    //               <span className="text-gray-300">
    //                 {line.includes("const") || line.includes("});") ? (
    //                   <span className="text-purple-400">{line}</span>
    //                 ) : line.includes("services") ||
    //                   line.includes("founders") ||
    //                   line.includes("mission") ||
    //                   line.includes("approach") ? (
    //                   <>
    //                     <span className="text-blue-400">{line.split(":")[0]}:</span>
    //                     <span className="text-green-400">{line.split(":")[1]}</span>
    //                   </>
    //                 ) : line.includes("console.log") ? (
    //                   <span className="text-yellow-400">{line}</span>
    //                 ) : (
    //                   line
    //                 )}
    //               </span>
    //             </motion.div>
    //           ))}
    //           <motion.div
    //             className="flex"
    //             animate={{ opacity: [1, 0, 1] }}
    //             transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
    //           >
    //             <span className="text-primary/60 w-8 text-right mr-4">{currentLine + 2}</span>
    //             <span className="text-primary">█</span>
    //           </motion.div>
    //         </div>
    //       )}
    //     </div>

    //     {/* Holographic glow effect */}
    //     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 pointer-events-none"></div>
    //     <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    //   </motion.div>
    // </div>
  )
}
