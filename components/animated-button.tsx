import type React from "react"
import { Rocket } from "lucide-react"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
}

export function AnimatedButton({ href, children }: AnimatedButtonProps) {
  return (
    <a
      href={href}
      className="animated-button group relative inline-flex items-center justify-center overflow-hidden rounded-full px-[18px] py-3 text-sm font-medium text-white ring-1 ring-white/10 shadow-lg transition-all hover:from-violet-400 hover:to-indigo-400 active:scale-95 sm:w-auto w-full"
      style={{
        background:
          "radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, rgb(122, 90, 248), rgb(122, 90, 248))",
      }}
    >
      {/* Fold effect */}
      <div
        className="fold absolute top-0 right-0 h-4 w-4 z-[1] transition-all duration-300 group-hover:-mt-4 group-hover:-mr-4"
        style={{
          background:
            "radial-gradient(100% 75% at 55% center, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%)",
          boxShadow: "0 0 3px black",
          borderBottomLeftRadius: "0.5rem",
          borderTopRightRadius: "9999px",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[150%] h-[150%] bg-[#e8e8e8] pointer-events-none"
          style={{
            transform: "rotate(45deg) translateX(0%) translateY(-18px)",
          }}
        />
      </div>

      {/* Floating points */}
      <div className="points-wrapper absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[
          { left: "10%", opacity: 1, duration: "2.35s", delay: "0.2s" },
          { left: "30%", opacity: 0.7, duration: "2.5s", delay: "0.5s" },
          { left: "25%", opacity: 0.8, duration: "2.2s", delay: "0.1s" },
          { left: "44%", opacity: 0.6, duration: "2.05s", delay: "0s" },
          { left: "50%", opacity: 1, duration: "1.9s", delay: "0s" },
          { left: "75%", opacity: 0.5, duration: "1.5s", delay: "1.5s" },
          { left: "88%", opacity: 0.9, duration: "2.2s", delay: "0.2s" },
          { left: "58%", opacity: 0.8, duration: "2.25s", delay: "0.2s" },
          { left: "98%", opacity: 0.6, duration: "2.6s", delay: "0.1s" },
          { left: "65%", opacity: 1, duration: "2.5s", delay: "0.2s" },
        ].map((point, i) => (
          <div
            key={i}
            className="point absolute -bottom-[10px] w-[2px] h-[2px] bg-white rounded-full animate-floating-points"
            style={{
              left: point.left,
              opacity: point.opacity,
              animationDuration: point.duration,
              animationDelay: point.delay,
            }}
          />
        ))}
      </div>

      {/* Button content */}
      <div className="inner relative z-[2] flex items-center justify-center gap-1.5 w-full text-white">
        {children}
        <Rocket className="icon h-[18px] w-[18px] fill-white transition-all group-hover:animate-rocket-dash" />
      </div>

      {/* Gradient layers */}
      <div
        className="absolute inset-[1px] rounded-full z-0 transition-all duration-500"
        style={{
          background: "linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
      <div
        className="absolute inset-[2px] rounded-full z-0 transition-all duration-500"
        style={{
          background:
            "radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8)",
        }}
      />
    </a>
  )
}
