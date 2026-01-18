"use client"

import { useEffect, useState } from "react"

const languages = [
  { code: "fr", label: "FR" },
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
]

export default function LanguageSwitcher({
  onChange,
}: {
  onChange: (lang: "fr" | "nl" | "en") => void
}) {
  const [active, setActive] = useState<"fr" | "nl" | "en">("fr")

  useEffect(() => {
    const stored = localStorage.getItem("lang")
    const browser = navigator.language.slice(0, 2) as any
    const initial = stored || (["fr", "nl", "en"].includes(browser) ? browser : "fr")
    setActive(initial)
    onChange(initial)
  }, [onChange])

  function select(lang: "fr" | "nl" | "en") {
    setActive(lang)
    localStorage.setItem("lang", lang)
    onChange(lang)
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-white/70 backdrop-blur-md px-3 py-2 rounded-full shadow">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => select(l.code as any)}
          className={`text-xs tracking-widest transition ${
            active === l.code
              ? "text-yellow-800 font-medium"
              : "text-yellow-950/60"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
