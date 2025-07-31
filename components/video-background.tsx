"use client"

import { useEffect, useRef } from "react"

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6 // Slower for more elegant feel
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
          style={{
            filter: "brightness(0.7) contrast(1.4) saturate(1.3) hue-rotate(10deg)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20shiny%2C%20thick%2C%20translucent%20liquid%20object%20floating%20in%20mid-air%2C%20spinning%20slowly%20and%20randomly%20in%203D%20space.%20The%20object%20has%20a%20glass-like%20reflective%20surface%20with%20vibrant%20neon%20gradients%20of%20electric%20blue%2C%20hot%20pink%2C%20an-zKzzWX9SFjxt26865WYXLTRLHrgccz.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Enhanced gradient overlays for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Animated neon overlay for cyberpunk feel */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)
          `,
          animation: "neonFloat 25s ease-in-out infinite",
        }}
      />

      {/* Cyberpunk grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridPulse 4s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes neonFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-15px) rotate(1deg) scale(1.02);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-5px) rotate(-0.5deg) scale(0.98);
            opacity: 0.3;
          }
          75% { 
            transform: translateY(10px) rotate(0.5deg) scale(1.01);
            opacity: 0.45;
          }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
