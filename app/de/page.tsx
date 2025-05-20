"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GermanPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-32">
        <header className="mb-24">
          <motion.h1
            className="text-6xl sm:text-8xl font-extralight tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Henophilia
          </motion.h1>
          <motion.p
            className="text-sm text-zinc-400 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Systeme, die man bewohnen kann
          </motion.p>
        </header>

        {/* Top Disclaimer */}
        <div className="mb-16 p-4 border border-zinc-800 rounded-md bg-zinc-900/50 text-zinc-400 text-sm">
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Dies ist eine vereinfachte Version im Vergleich zur{" "}
            <Link
              href="/"
              className="underline hover:text-white transition-colors"
            >
              englischen Version
            </Link>
            , die mehr Details und aktuelle Projekte enthält.
          </p>
        </div>

        <main className="space-y-32">
          {/* Warum diese Seite existiert */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Warum diese Seite existiert
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                Ich bin Julian. 25 Jahre alt. Ich arbeite an Strukturen für ein
                Zusammenleben, das gesünder, gerechter und zukunftsfähiger ist.
                Keine Utopie – sondern Werkzeuge und Methoden, die direkt
                ausprobierbar sind.
              </p>
              <p className="text-zinc-400 mb-6">
                <strong>Henophilia</strong> – die Liebe zum Einssein –
                beschreibt meinen Versuch, Systeme zu entwickeln, die Menschen
                miteinander verbinden, anstatt sie voneinander zu trennen.
              </p>
            </div>
          </section>

          {/* Die Herausforderung */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Die Herausforderung
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                Unsere heutigen Systeme sind oft überholt: unverständlich,
                unpersönlich, und manchmal sogar ungerecht. Henophilia will neue
                Wege eröffnen, die Freiheit und Verbundenheit gleichzeitig
                möglich machen – praktisch, digital, gemeinschaftlich.
              </p>
            </div>
          </section>

          {/* Die Prinzipien */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Die Prinzipien
            </h2>
            <div className="max-w-2xl">
              <ul className="text-zinc-400 mb-6 space-y-3 list-none">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  <strong>Teilnahme statt Stellvertretung</strong>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  <strong>Transparenz statt Machtgeheimnisse</strong>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  <strong>Verbindung statt Vereinzelung</strong>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  <strong>Einfachheit im Kern, Vielfalt im Ausdruck</strong>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  <strong>Lernfähigkeit statt Stillstand</strong>
                </li>
              </ul>
            </div>
          </section>

          {/* Projekte */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Projekte
            </h2>
            <div className="space-y-12">
              <div className="border-l-2 border-zinc-800 pl-6 py-2">
                <h3 className="text-xl font-light mb-1">
                  <a
                    href="https://steuerdemokratie.de"
                    target="_blank"
                    className="hover:text-zinc-300 transition-colors"
                  >
                    steuerdemokratie.de
                  </a>
                </h3>
                <p className="text-zinc-400 mb-6">
                  Eine Plattform, auf der Bürger:innen selbst entscheiden, wie
                  ihre Steueranteile verwendet werden. Digital, demokratisch,
                  direkt.
                </p>
              </div>

              <div className="border-l-2 border-zinc-800 pl-6 py-2">
                <h3 className="text-xl font-light mb-1">
                  <a
                    href="https://live.divizend.com"
                    target="_blank"
                    className="hover:text-zinc-300 transition-colors"
                  >
                    live.divizend.com
                  </a>
                </h3>
                <p className="text-zinc-400 mb-6">
                  Ein transparenter, partizipativer Finanzraum –
                  Finanztechnologie zur Stärkung echter Gemeinschaften statt
                  reiner Gewinnmaximierung.
                </p>
              </div>

              <div className="border-l-2 border-zinc-800 pl-6 py-2">
                <h3 className="text-xl font-light mb-1">
                  <a
                    href="https://vertrauen.live"
                    target="_blank"
                    className="hover:text-zinc-300 transition-colors"
                  >
                    vertrauen.live
                  </a>
                </h3>
                <p className="text-zinc-400 mb-6">
                  Eine Plattform für Begegnungen mit Tiefgang. Kein Swipen –
                  sondern echtes Zuhören, echtes Interesse.
                </p>
              </div>

              <div className="border-l-2 border-zinc-800 pl-6 py-2">
                <h3 className="text-xl font-light mb-1">
                  <a
                    href="https://ultimatecollaboration.org"
                    target="_blank"
                    className="hover:text-zinc-300 transition-colors"
                  >
                    ultimatecollaboration.org
                  </a>
                </h3>
                <p className="text-zinc-400 mb-6">
                  Ein digitales Netzwerk, das Initiativen, Wissen und Menschen
                  miteinander verbindet – eine Enzyklopädie für Transformation.
                </p>
              </div>
            </div>
          </section>

          {/* Was hat das mit dir zu tun? */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Was hat das mit dir zu tun?
            </h2>
            <div className="max-w-2xl">
              <ul className="text-zinc-400 mb-6 space-y-3 list-none">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  Du willst mitbestimmen, wofür deine Steuern verwendet werden?
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  Du willst Menschen kennenlernen, die auch nach Sinn suchen?
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  Du willst nicht nur kritisieren, sondern mitgestalten?
                </li>
              </ul>
              <p className="text-zinc-400">
                Dann bist du eingeladen, mitzuwirken – ob durch Ideen,
                Gespräche, Unterstützung oder eigenes Projekt.
              </p>
            </div>
          </section>

          {/* Was Henophilia nicht ist */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Was Henophilia nicht ist
            </h2>
            <div className="max-w-2xl">
              <ul className="text-zinc-400 mb-6 space-y-3 list-none">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  Keine Religion, kein Dogma
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  Keine App, die dich süchtig machen will
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  Kein Startup mit Exit-Strategie
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-zinc-600 mt-2 mr-3"></span>
                  Kein perfektes System – sondern ein lernendes
                </li>
              </ul>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Kontakt
            </h2>
            <div className="max-w-lg">
              <div className="space-y-4">
                <p className="text-zinc-400 mb-2">
                  Du hast Fragen, Ideen oder Kritik? Schreib mir:
                </p>
                <p className="text-zinc-300 flex items-center gap-2 mb-6">
                  <strong>
                    📬
                    <a
                      href="mailto:synergies@henophilia.art"
                      className="hover:text-white hover:underline ml-2"
                    >
                      synergies@henophilia.art
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-32 border-t border-zinc-800 pt-8">
          <p className="text-zinc-600 text-sm mb-2">
            © 2025 Henophilia · Inhabitable Systems Design
          </p>
          <div className="footer-links text-zinc-500 text-sm flex flex-wrap gap-4 mb-6">
            <a
              href="https://blog.hermesloom.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Blog
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href="https://www.instagram.com/jlnnlnz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Instagram
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href="https://www.linkedin.com/in/nalenz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href="https://github.com/hermesloom"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-zinc-500 text-sm italic">
            „Manche nennen es Idealismus. Ich nenne es: ernst gemeinte
            Verantwortung." – Julian Nalenz
          </p>

          {/* Disclaimer */}
          <div className="mt-12 pt-6 border-t border-zinc-900 text-zinc-600 text-xs">
            <p>
              Diese Seite wurde mit{" "}
              <a
                href="https://chatgpt.com/share/682c936b-2f74-8003-b59f-2cee6c2a1346"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-400"
              >
                ChatGPT
              </a>{" "}
              generiert und mit{" "}
              <a
                href="https://cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-zinc-400"
              >
                Cursor
              </a>{" "}
              bearbeitet.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
