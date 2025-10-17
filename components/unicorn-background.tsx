"use client"

import { useEffect } from "react"

export function UnicornBackground() {
  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false }
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        }
      }
      ;(document.head || document.body).appendChild(script)
    }
  }, [])

  return (
    <div className="aura-background-component absolute top-0 left-0 right-0 w-full h-full -z-10">
      <div data-us-project="ILgOO23w4wEyPQOKyLO4" className="absolute w-full h-full left-0 top-0 -z-10" />
    </div>
  )
}

// Type declaration for Unicorn Studio
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean
      init: () => void
    }
  }
}
