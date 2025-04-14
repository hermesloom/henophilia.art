"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Translation } from "@/lib/i18n-types";
import en from "@/lib/translations/en";
import de from "@/lib/translations/de";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "de">("en");
  const translations: { [key: string]: Translation } = { en, de };
  const t = translations[language];

  /*useEffect(() => {
    // Set initial language based on browser preference
    try {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "de") {
        setLanguage("de");
      }
    } catch (e) {
      console.error("Error setting language:", e);
    }
  }, []);*/

  // Fallback if translations aren't loaded
  if (!t) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-32">
        {/* Language Switcher */}
        <div className="absolute top-8 right-8 flex items-center space-x-2 text-sm">
          <span className="text-zinc-500">{t.languageSwitcher.label}</span>
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-1 rounded ${
              language === "en" ? "bg-zinc-800 text-white" : "text-zinc-500"
            }`}
          >
            {t.languageSwitcher.languages.en}
          </button>
          <button
            onClick={() => setLanguage("de")}
            className={`px-2 py-1 rounded ${
              language === "de" ? "bg-zinc-800 text-white" : "text-zinc-500"
            }`}
          >
            {t.languageSwitcher.languages.de}
          </button>
        </div>

        <header className="mb-24">
          <motion.h1
            className="text-6xl sm:text-8xl font-extralight tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HENOPHILIA
          </motion.h1>
          <motion.p
            className="text-sm text-zinc-400 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.tagline}
          </motion.p>
        </header>

        <main className="space-y-32">
          {/* Artist Introduction */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              {t.sections.artist.title}
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                {t.sections.artist.paragraph1}
              </p>
              <p className="text-zinc-400">{t.sections.artist.paragraph2}</p>
            </div>
          </section>

          {/* About Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              {t.sections.unity.title}
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                {t.sections.unity.paragraph1}
              </p>
              <p className="text-zinc-400">{t.sections.unity.paragraph2}</p>
            </div>
          </section>

          {/* Works Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              {t.sections.works.title}
            </h2>
            <div className="space-y-12">
              {t.works.map((work) => (
                <div
                  key={work.id}
                  className="border-l-2 border-zinc-800 pl-6 py-2"
                >
                  <h3 className="text-xl font-light mb-1">{work.title}</h3>
                  <p className="text-zinc-500 text-sm mb-4">{work.year}</p>
                  <p className="text-zinc-400 mb-6">{work.description}</p>
                  <div className="prose prose-invert prose-sm max-w-none opacity-80 font-light leading-relaxed mb-6">
                    {work.content.split("\n\n").map((paragraph, idx) =>
                      paragraph ? (
                        <p key={idx} className="mb-4">
                          {paragraph}
                        </p>
                      ) : (
                        <br key={idx} />
                      )
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.url.replace("https://", "")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              {t.sections.methodology.title}
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                {t.sections.methodology.paragraph1}
              </p>
              <p className="text-zinc-400 mb-6">
                {t.sections.methodology.paragraph2}
              </p>
              <p className="text-zinc-400">
                {t.sections.methodology.paragraph3}
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              {t.sections.connect.title}
            </h2>
            <div className="max-w-lg">
              <div className="space-y-4">
                <p className="text-zinc-300 flex items-center gap-2">
                  <span className="text-zinc-500">
                    {t.sections.connect.email}
                  </span>{" "}
                  <a
                    href="mailto:synergies@henophilia.art"
                    className="hover:text-white hover:underline"
                  >
                    synergies@henophilia.art
                  </a>
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent hover:bg-zinc-800/30 hover:border-zinc-600 text-white hover:text-zinc-200 transition-all duration-200 flex items-center gap-2"
                    asChild
                  >
                    <a
                      href="https://blog.hermesloom.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z" />
                        <path d="M10 2v8l3-3 3 3V2" />
                      </svg>
                      <span>{t.sections.connect.social.blog}</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent hover:bg-zinc-800/30 hover:border-zinc-600 text-white hover:text-zinc-200 transition-all duration-200 flex items-center gap-2"
                    asChild
                  >
                    <a
                      href="https://instagram.com/henophilia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span>{t.sections.connect.social.instagram}</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent hover:bg-zinc-800/30 hover:border-zinc-600 text-white hover:text-zinc-200 transition-all duration-200 flex items-center gap-2"
                    asChild
                  >
                    <a
                      href="https://bsky.app/profile/henophilia.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 600 530"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0"
                        className="fill-current"
                      >
                        <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
                      </svg>
                      <span>{t.sections.connect.social.bluesky}</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent hover:bg-zinc-800/30 hover:border-zinc-600 text-white hover:text-zinc-200 transition-all duration-200 flex items-center gap-2"
                    asChild
                  >
                    <a href="mailto:synergies@henophilia.art">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>{t.sections.connect.social.email}</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-800 bg-transparent hover:bg-zinc-800/30 hover:border-zinc-600 text-white hover:text-zinc-200 transition-all duration-200 flex items-center gap-2"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/nalenz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span>{t.sections.connect.social.linkedin}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="absolute bottom-6 w-full text-center text-zinc-600 text-xs">
        <p className="mb-2">
          © {new Date().getFullYear()} {t.footer}
        </p>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/hermesloom/henophilia.art"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-zinc-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
