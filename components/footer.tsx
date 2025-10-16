export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-white/[0.06] mt-20 pt-10 pb-10">
          <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
            <p className="text-xs text-white/50">
              © <span>{currentYear}</span> Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl rounded-full"></div>
      </div>
    </footer>
  )
}
