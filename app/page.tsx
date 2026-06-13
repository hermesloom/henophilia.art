"use client";

import { motion } from "framer-motion";
import { works, WORKS_TITLE, CONNECT_TITLE } from "@/lib/works";
import {
  watchlist,
  WATCHLIST_TITLE,
  WATCHLIST_LAST_UPDATED,
} from "@/lib/watchlist";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-70"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function SunRays() {
  return (
    <div
      className="pointer-events-none absolute -top-24 right-0 h-[480px] w-[480px] opacity-40"
      style={{ animation: "solarpunk-rays 10s ease-in-out infinite" }}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            stroke="url(#rayGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}
        <defs>
          <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd166" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FloatingLeaf({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute text-4xl sm:text-5xl ${className}`}
      animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      🌿
    </motion.div>
  );
}

function FloatingOrb({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        background: color,
        animation: "solarpunk-pulse-glow 6s ease-in-out infinite",
      }}
    />
  );
}

const githubIcon = (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const socials = [
  {
    label: "Email",
    href: "mailto:synergies@nalenz.org",
    text: "synergies@nalenz.org",
    icon: (
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "GitHub sigalor",
    href: "https://github.com/sigalor",
    text: "@sigalor",
    icon: githubIcon,
  },
  {
    label: "GitHub hermesloom",
    href: "https://github.com/hermesloom",
    text: "@hermesloom",
    icon: githubIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jlnnlnz",
    text: "@jlnnlnz",
    icon: (
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/henophilia.bsky.social",
    text: "Bluesky",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 600 530"
        fill="currentColor"
      >
        <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nalenz/",
    text: "LinkedIn",
    icon: (
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
    ),
  },
  {
    label: "Blog",
    href: "https://blog.hermesloom.org/",
    text: "Blog",
    icon: (
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
    ),
  },
  {
    label: "X",
    href: "https://x.com/henophilia",
    text: "X",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const interests = [
  {
    title: "Data Sovereignty",
    accent: "#2dd4bf",
    body: (
      <>
        I want everyone to own their data. The right to a fully encrypted
        personal storage should be non-negotiable. I strongly believe in the
        power of knowledge graphs — and especially the Semantic Web.
      </>
    ),
  },
  {
    title: "Bureaucracy Simplification",
    accent: "#ffd166",
    body: (
      <>
        I want to build systems that solve &ldquo;bureaucracy anxiety&rdquo; —
        the conditioned fear of paperwork some people carry. I believe that
        excessive bureaucracy is a form of violence, mainly used to exclude
        certain people from doing certain things. Based on the personal
        knowledge graph, I want to create the &ldquo;Wikipedia of forms&rdquo; —
        a path through which any form in the world can be filled.
      </>
    ),
  },
  {
    title: "Participation Culture",
    accent: "#b8ff57",
    body: (
      <>
        Borderland already does it at a scale of almost 5,500 people every year:
        a few months before the event, people get access to a web platform where
        they can submit all their ideas — including budget planning. About half
        of the total budget covers fixed costs like electricity and water (the
        &ldquo;realities&rdquo;), but the other half flows into these
        &ldquo;dreams&rdquo;. In the second step, people vote with the money
        they already paid for their tickets anyway. It&apos;s like a
        mini-crowdfunding within the organization — no new money comes in, and
        people can give €5 to one project, €10 to another, or however they
        please. Budgetary decision-making is fully decentralized; apart from
        rough guidelines, not even the board has any say in what comes to the
        event. I want this model of participatory budgeting to become accessible
        to any organization.
      </>
    ),
  },
  {
    title: "Connection to Nature",
    accent: "#86efac",
    body: (
      <>
        I often notice how my mind and body rebel against all this
        hyper-symbolic &ldquo;tech, finance and bureaucracy&rdquo; stuff.
        Everything I do in tech is a means to an end, as I really long for the
        way of life of my ancestors: being a farmer.
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="solarpunk-aurora-bg relative min-h-screen overflow-x-hidden text-[#f0fdf4]">
      <FloatingOrb
        className="left-[-10%] top-[20%] h-72 w-72"
        color="rgba(255, 209, 102, 0.25)"
      />
      <FloatingOrb
        className="right-[-5%] top-[45%] h-96 w-96"
        color="rgba(45, 212, 191, 0.2)"
      />
      <FloatingOrb
        className="bottom-[10%] left-[30%] h-64 w-64"
        color="rgba(184, 255, 87, 0.15)"
      />

      <FloatingLeaf className="left-[8%] top-[18%]" delay={0} />
      <FloatingLeaf className="right-[12%] top-[35%]" delay={1.2} />
      <FloatingLeaf className="left-[20%] bottom-[25%]" delay={2.4} />
      <FloatingLeaf className="right-[25%] top-[65%]" delay={0.8} />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8ff57' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative mb-28 px-5 pt-12 sm:mb-36 sm:px-8 sm:pt-16">
          <SunRays />

          <motion.h1
            className="mx-auto mb-8 max-w-5xl text-3xl leading-[1.15] font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-solarpunk-display)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="solarpunk-gradient-text">
              Building sovereign infrastructure
            </span>{" "}
            <span className="text-[#f0fdf4]">
              for allowing{" "}
              <em className="not-italic text-[#ffd166] underline decoration-[#b8ff57] decoration-wavy underline-offset-4">
                all
              </em>{" "}
              humans to realize their full potential.
            </span>
          </motion.h1>

          <motion.h2
            className="mx-auto max-w-5xl text-2xl font-semibold text-[#b8ff57] sm:text-4xl"
            style={{ fontFamily: "var(--font-solarpunk-display)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Trust, sovereignty, and beauty — by design.
          </motion.h2>
        </section>

        <div className="mx-auto max-w-5xl px-5 pb-12 sm:px-8 sm:pb-16">
          {/* Bio */}
          <motion.section className="mb-28 sm:mb-36" {...fadeUp}>
            <div className="solarpunk-card-glow solarpunk-glass rounded-2xl p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-[#d1fae5]/90 sm:text-xl">
                Hi, I&apos;m Julian, 26 years old. I started programming when I
                was 9, studied computer science at TU Munich and KTH Stockholm,
                co-founded the wildly successful German FinTech Divizend at 19
                and then became enchanted with the Burning Man-inspired culture
                of The Borderland at 22. I saw that the way how we design and
                run software directly influences the health of the people. I
                stand for more trust, more sovereignty, more decentralization,
                more art, more effective resource use, more democracy, less AI
                and less accumulation of capital. I already saw so much beauty
                in the world, and I want to empower everyone to make full use of
                all the stunning possibilities we have in the world. Bureaucracy
                too often stands in the way. Personally, I do all my cybermagic only because I want to live in nature and
                never have to work on a desk or in front of a screen again.
              </p>
            </div>
          </motion.section>

          {/* Areas of interest */}
          <motion.section className="mb-28 sm:mb-36" {...fadeUp}>
            <div className="grid gap-5 sm:grid-cols-2">
              {interests.map((area, i) => (
                <motion.article
                  key={area.title}
                  className="solarpunk-card-glow solarpunk-glass group relative overflow-hidden rounded-2xl p-7 sm:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-35"
                    style={{ background: area.accent }}
                  />
                  <h3
                    className="mb-4 text-xl font-semibold sm:text-2xl"
                    style={{
                      fontFamily: "var(--font-solarpunk-display)",
                      color: area.accent,
                    }}
                  >
                    {area.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-[#d1fae5]/85 sm:text-base">
                    {area.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Watchlist */}
          <motion.section className="mb-28 sm:mb-36" {...fadeUp}>
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2
                className="text-3xl font-bold sm:text-4xl"
                style={{ fontFamily: "var(--font-solarpunk-display)" }}
              >
                <span className="solarpunk-gradient-text">
                  {WATCHLIST_TITLE}
                </span>
              </h2>
              <span className="text-sm text-[#2dd4bf]/70">
                Last updated {WATCHLIST_LAST_UPDATED}
              </span>
            </div>

            <div className="grid gap-4 sm:gap-5">
              {watchlist.map((item, i) => (
                <motion.article
                  key={item.url}
                  className="solarpunk-card-glow solarpunk-glass group rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.01] sm:p-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: Math.min(i * 0.04, 0.4),
                    duration: 0.5,
                  }}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3
                      className="text-xl font-semibold text-[#ffd166] sm:text-2xl"
                      style={{
                        fontFamily: "var(--font-solarpunk-display)",
                      }}
                    >
                      {item.label}
                    </h3>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="solarpunk-social-btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-[#f0fdf4] sm:text-sm"
                    >
                      {item.url.replace(/^https?:\/\//, "")}
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section className="mb-28 sm:mb-36" {...fadeUp}>
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2
                className="text-3xl font-bold sm:text-4xl"
                style={{ fontFamily: "var(--font-solarpunk-display)" }}
              >
                <span className="solarpunk-gradient-text">
                {WORKS_TITLE}
              </span>
            </h2>
            <span className="text-sm text-[#2dd4bf]/70">
              {works.length} projects
            </span>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {works.map((work, i) => (
              <motion.article
                key={work.title}
                className="solarpunk-card-glow solarpunk-glass group rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.01] sm:p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: Math.min(i * 0.04, 0.4),
                  duration: 0.5,
                }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3
                        className="text-xl font-semibold text-[#ffd166] sm:text-2xl"
                        style={{
                          fontFamily: "var(--font-solarpunk-display)",
                        }}
                      >
                        {work.title}
                      </h3>
                      <span className="rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-3 py-0.5 text-xs tracking-wider text-[#2dd4bf]">
                        {work.year}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-[#a7f3d0]/80 sm:text-base">
                      {work.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-[220px] sm:justify-end">
                    {work.buttons?.map((button, index) => (
                      <a
                        key={index}
                        href={button.url}
                        target={
                          button.url.startsWith("/") ? undefined : "_blank"
                        }
                        rel={
                          button.url.startsWith("/")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="solarpunk-social-btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-[#f0fdf4] sm:text-sm"
                      >
                        {button.text}
                        <ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
            </div>
          </motion.section>

          {/* Socials */}
          <motion.section className="mb-20" {...fadeUp}>
            <h2
              className="mb-8 text-3xl font-bold sm:text-4xl"
              style={{ fontFamily: "var(--font-solarpunk-display)" }}
            >
              <span className="solarpunk-gradient-text">
                {CONNECT_TITLE}
              </span>
            </h2>

            <div className="solarpunk-card-glow solarpunk-glass rounded-2xl p-8 sm:p-10">
              <p className="mb-8 text-lg text-[#d1fae5]/90">
                Ready to build something beautiful? Reach out — I&apos;d love to
                hear from you.
              </p>

              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="solarpunk-social-btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#f0fdf4]"
                  >
                    <span className="text-[#ffd166]">{social.icon}</span>
                    <span>{social.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.section>

          <footer className="border-t border-[#b8ff57]/15 pt-8 text-center text-sm text-[#2dd4bf]/60">
            <p>
              © {new Date().getFullYear()} Julian Nalenz ·{" "}
              <a
                href="https://www.nalenzequity.com/imprint"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#b8ff57]"
              >
                Imprint
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
