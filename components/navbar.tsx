"use client"

import type React from "react"

import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

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

  const isActive = (href: string) => {
    // Home page - exact match only
    if (href === "/" || href === "#hero") return pathname === "/"

    // Hash links on homepage - only active when on homepage
    if (href.startsWith("#") || href.startsWith("/#")) return false

    // Case Studies page - exact match only (not case study detail pages)
    if (href === "/case-studies") return pathname === "/case-studies"

    // My Approach page - exact match
    if (href === "/my-approach") return pathname === "/my-approach"

    // About/Experiences page - exact match
    if (href === "/about") return pathname === "/about"

    // Insights page - exact match
    if (href === "/insights") return pathname === "/insights"

    // Case study detail pages - match pattern /case-study/*
    if (href.startsWith("/case-study/")) return pathname === href

    // Default: exact match
    return pathname === href
  }

  const navLinkClass = (href: string) =>
    cn(
      "text-sm transition-colors relative py-1",
      isActive(href)
        ? "text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-400 after:to-teal-400 after:rounded-full"
        : "text-slate-300/90 hover:text-slate-100 font-normal",
    )

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-b from-black/70 via-black/40 to-transparent border-b border-white/5">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/mylogo.png" alt="Hesham Faragalla Logo" width={36} height={36} className="rounded-lg" />
          <span className="text-lg font-medium text-slate-100 tracking-tight">Hesham Faragalla</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {pathname === "/" ? (
            <>
              <a className={navLinkClass("#hero")} href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
                Home
              </a>
              <Link className={navLinkClass("/case-studies")} href="/case-studies">
                Case Studies
              </Link>
              <a
                className={navLinkClass("#design-process")}
                href="#design-process"
                onClick={(e) => handleNavClick(e, "#design-process")}
              >
                Design Process
              </a>
              <Link className={navLinkClass("/my-approach")} href="/my-approach">
                My Approach
              </Link>
              <Link className={navLinkClass("/about")} href="/about">
                Experiences
              </Link>
              <a className={navLinkClass("#contact")} href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact
              </a>
            </>
          ) : (
            <>
              <Link className={navLinkClass("/")} href="/">
                Home
              </Link>
              <Link className={navLinkClass("/case-studies")} href="/case-studies">
                Case Studies
              </Link>
              <Link className={navLinkClass("/#design-process")} href="/#design-process">
                Design Process
              </Link>
              <Link className={navLinkClass("/my-approach")} href="/my-approach">
                My Approach
              </Link>
              <Link className={navLinkClass("/about")} href="/about">
                Experiences
              </Link>
              <Link className={navLinkClass("/#contact")} href="/#contact">
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
