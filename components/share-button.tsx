"use client"

import { useState } from "react"
import { Share2, X, Copy, Check, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareButtonProps {
  title: string
  url: string
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="icon"
        className="fixed right-8 top-24 z-40 rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
      >
        <Share2 className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Share Article</h3>
              <p className="mt-1 text-sm text-white/60">Share this article with your network</p>
            </div>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="mb-4 flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
            >
              {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5 text-white/60" />}
              <div className="flex-1 text-left">
                <p className="font-medium text-white">{copied ? "Link Copied!" : "Copy Link"}</p>
                <p className="text-sm text-white/60">{copied ? "Share it anywhere" : "Copy link to clipboard"}</p>
              </div>
            </button>

            {/* Social Share Buttons */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-white/60">Share on social media</p>

              {/* LinkedIn */}
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-blue-500/20 p-4 transition-all hover:from-blue-600/30 hover:to-blue-500/30"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-sm text-white/60">Share with professionals</p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-blue-700/20 to-blue-600/20 p-4 transition-all hover:from-blue-700/30 hover:to-blue-600/30"
              >
                <Facebook className="h-5 w-5 text-blue-500" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-white">Facebook</p>
                  <p className="text-sm text-white/60">Share with friends</p>
                </div>
              </a>

              {/* Twitter/X */}
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-sky-600/20 to-sky-500/20 p-4 transition-all hover:from-sky-600/30 hover:to-sky-500/30"
              >
                <svg className="h-5 w-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div className="flex-1 text-left">
                  <p className="font-medium text-white">X (Twitter)</p>
                  <p className="text-sm text-white/60">Post to your followers</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
