"use client"

import { useEffect } from "react"

export function ContentProtection() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && (e.key === "C" || e.key === "c")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+S (Save)
      if (e.ctrlKey && (e.key === "s" || e.key === "S")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+P (Print)
      if (e.ctrlKey && (e.key === "p" || e.key === "P")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+A (Select All)
      if (e.ctrlKey && (e.key === "a" || e.key === "A")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+C (Copy)
      if (e.ctrlKey && (e.key === "c" || e.key === "C") && !e.shiftKey) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+V (Paste)
      if (e.ctrlKey && (e.key === "v" || e.key === "V")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+X (Cut)
      if (e.ctrlKey && (e.key === "x" || e.key === "X")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+K (Firefox Console)
      if (e.ctrlKey && e.shiftKey && (e.key === "K" || e.key === "k")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+M (Responsive Design Mode)
      if (e.ctrlKey && e.shiftKey && (e.key === "M" || e.key === "m")) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+E (Network Tab)
      if (e.ctrlKey && e.shiftKey && (e.key === "E" || e.key === "e")) {
        e.preventDefault()
        return false
      }

      // Disable Alt+Cmd+I (Mac DevTools)
      if (e.altKey && e.metaKey && (e.key === "I" || e.key === "i")) {
        e.preventDefault()
        return false
      }

      // Disable Cmd+Option+U (Mac View Source)
      if (e.metaKey && e.altKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault()
        return false
      }

      // Disable Cmd+S (Mac Save)
      if (e.metaKey && (e.key === "s" || e.key === "S")) {
        e.preventDefault()
        return false
      }

      // Disable Cmd+P (Mac Print)
      if (e.metaKey && (e.key === "p" || e.key === "P")) {
        e.preventDefault()
        return false
      }

      // Disable Cmd+A (Mac Select All)
      if (e.metaKey && (e.key === "a" || e.key === "A")) {
        e.preventDefault()
        return false
      }

      // Disable Cmd+C (Mac Copy)
      if (e.metaKey && (e.key === "c" || e.key === "C") && !e.shiftKey) {
        e.preventDefault()
        return false
      }
    }

    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement
      // Allow selection in input and textarea
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return true
      }
      e.preventDefault()
      return false
    }

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      return false
    }

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault()
      return false
    }

    const handlePaste = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement
      // Allow paste in input and textarea
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return true
      }
      e.preventDefault()
      return false
    }

    const detectDevTools = () => {
      const threshold = 160
      const widthThreshold = window.outerWidth - window.innerWidth > threshold
      const heightThreshold = window.outerHeight - window.innerHeight > threshold

      if (widthThreshold || heightThreshold) {
        document.body.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-family:system-ui;font-size:24px;text-align:center;padding:20px;">Developer tools are disabled on this website.</div>'
      }
    }

    const handleBeforePrint = (e: Event) => {
      e.preventDefault()
      document.body.style.display = "none"
    }

    const handleAfterPrint = () => {
      document.body.style.display = ""
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "IMG") {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("selectstart", handleSelectStart)
    document.addEventListener("dragstart", handleDragStart)
    document.addEventListener("copy", handleCopy)
    document.addEventListener("cut", handleCut)
    document.addEventListener("paste", handlePaste)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("beforeprint", handleBeforePrint)
    window.addEventListener("afterprint", handleAfterPrint)
    window.addEventListener("resize", detectDevTools)

    const disableImageDrag = () => {
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        img.setAttribute("draggable", "false")
        img.style.pointerEvents = "none"
      })
    }

    // Initial call and mutation observer for dynamic images
    disableImageDrag()

    const observer = new MutationObserver(() => {
      disableImageDrag()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    const consoleWarning = () => {
      console.clear()
      console.log("%cStop!", "color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 0 #000;")
      console.log(
        "%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam.",
        "font-size: 18px;",
      )
    }
    consoleWarning()

    const consoleInterval = setInterval(consoleWarning, 5000)

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("selectstart", handleSelectStart)
      document.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("copy", handleCopy)
      document.removeEventListener("cut", handleCut)
      document.removeEventListener("paste", handlePaste)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("beforeprint", handleBeforePrint)
      window.removeEventListener("afterprint", handleAfterPrint)
      window.removeEventListener("resize", detectDevTools)
      observer.disconnect()
      clearInterval(consoleInterval)
    }
  }, [])

  return null
}
