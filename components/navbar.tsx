"use client"

import type React from "react"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-b from-black/70 via-black/40 to-transparent border-b border-white/5">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-fuchsia-500 ring-1 ring-inset ring-white/10 shadow-lg shadow-fuchsia-500/10">
            <span className="sr-only">Logo</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white">
              <path
                fill="currentColor"
                d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zm0 2.3L6 6.7v6.6l6 3.4 6-3.4V6.7l-6-2.4z"
              />
            </svg>
          </span>
          <span className="text-lg font-medium text-slate-100 tracking-tight">Hesham Faragalla</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {pathname === "/" ? (
            <>
              <a
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
              >
                Home
              </a>
              <a
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="#case-study"
                onClick={(e) => handleNavClick(e, "#case-study")}
              >
                Case Studies
              </a>
              <a
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="#design-process"
                onClick={(e) => handleNavClick(e, "#design-process")}
              >
                Design Process
              </a>
              <Link
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="/about"
              >
                Experiences
              </Link>
              <a
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal" href="/">
                Home
              </Link>
              <Link
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="/#case-study"
              >
                Case Studies
              </Link>
              <Link
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="/#design-process"
              >
                Design Process
              </Link>
              <Link
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="/about"
              >
                Experiences
              </Link>
              <Link
                className="text-slate-300/90 hover:text-slate-100 transition-colors text-sm font-normal"
                href="/#contact"
              >
                Contact
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/10 hover:bg-white/5 text-slate-200 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
