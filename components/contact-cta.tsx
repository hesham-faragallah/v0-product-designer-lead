"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Phone, X, Copy, Check } from "lucide-react"

export function ContactCTA() {
  const [showPhonePopup, setShowPhonePopup] = useState(false)
  const [copied, setCopied] = useState(false)
  const phoneNumber = "+9710507058346"

  const handlePhoneClick = (e: React.MouseEvent) => {
    // Check if on mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      // On mobile, allow default tel: behavior
      return
    }

    // On desktop, prevent default and show popup
    e.preventDefault()
    setShowPhonePopup(true)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(phoneNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative px-6 py-20 lg:px-8" id="contact">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 via-fuchsia-500/10 to-orange-500/10 p-12 ring-1 ring-white/10 backdrop-blur-sm text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:Hesham-farag@outlook.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/hesham-farag-b3218052/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`tel:${phoneNumber}`}
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/20 hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Call Me
            </a>
          </div>
        </div>
      </div>

      {showPhonePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-sm rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 ring-1 ring-white/10 shadow-2xl">
            <button
              onClick={() => setShowPhonePopup(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-slate-400 text-sm mb-6">Click the number to copy or dial directly</p>

              <div className="flex items-center justify-center gap-3 rounded-lg bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <span className="text-lg font-mono text-white">{phoneNumber}</span>
                <button
                  onClick={copyToClipboard}
                  className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>

              <a
                href={`tel:${phoneNumber}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                Dial Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactCTA
