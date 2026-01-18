"use client"

import { useState } from "react"
import { menu, Language } from "@/lib/menu"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function MenuPage() {
  const [lang, setLang] = useState<Language>("fr")
  const content = menu[lang]

  return (
    <main className="bg-neutral-50 text-neutral-900">
      {/* Language Switcher */}
      <LanguageSwitcher onChange={setLang} />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-yellow-800 mb-6">{content.hero.label}</p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-light mb-6 text-gray-800">
          {content.hero.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="italic text-yellow-800">
            {content.hero.title.split(" ").slice(-1)}
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-lg text-yellow-950/60 leading-relaxed">
          {content.hero.description}
        </p>
      </section>

      {/* MENU CONTENT */}
      <section className="pb-32 px-6">
        <div className="max-w-2xl mx-auto space-y-24">
          {content.categories.map((category) => (
            <section key={category.title}>
              <h2 className="text-3xl md:text-4xl font-cormorant mb-4 text-yellow-800">
                {category.title}
              </h2>

              {category.note && (
                <p className="mb-10 text-sm italic text-yellow-950/60">
                  {category.note}
                </p>
              )}

              <div className="space-y-10">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between gap-6"
                  >
                    <div>
                      <p className="text-lg tracking-wide text-gray-800">
                        {item.name}
                      </p>

                      {item.description && (
                        <p className="text-sm text-yellow-950/60 mt-1">
                          {item.description}
                        </p>
                      )}

                      {item.badge && (
                        <span className="inline-block mt-2 text-xs tracking-widest uppercase text-yellow-800 border border-yellow-800/40 px-2 py-1 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <span className="text-lg text-yellow-800 tracking-wide whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="pb-24 px-6 text-center">
        <p className="text-sm italic text-yellow-950/60">
          {content.footerNote}
        </p>

        <p className="mt-4 text-xs text-yellow-950/40">
          {content.meta.restaurantName} · {content.meta.lastUpdated}
        </p>
      </section>
    </main>
  )
}
