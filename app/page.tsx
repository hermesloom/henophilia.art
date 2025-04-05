"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const works = [
    {
      id: 1,
      title: "henophilia.org",
      year: "2024",
      description:
        "The foundation manifesto and living document of Henophilia as a culture, philosophy, and way of life. This project articulates how unity-centered thinking can transform personal and collective existence.",
      content:
        "This artwork explores the concept of Henophilia—derived from the Greek 'hen' (one) and 'philia' (love)—as both a philosophical framework and practical approach to living. Unlike traditional systems that separate humans through hierarchical structures, Henophilia proposes an intercultural, global culture centered on unity. \n\nThe piece establishes Henophilia as the antithesis of nihilism, positioning it as a holistic belief system that internalizes divinity rather than externalizing it. This conceptual shift eliminates the power structures that typically emerge from religious or philosophical systems while maintaining their community-building benefits. \n\nAs an artwork, henophilia.org operates in the space between manifesto and living document, inviting participation rather than passive consumption. It rejects the commercialization of well-being and instead promotes decentralized organizational structures that can emerge organically when humans relate to each other through genuine connection and self-efficacy.",
    },
    {
      id: 2,
      title: "Ultimate Collaboration",
      year: "2024–today",
      description:
        "A digital encyclopedia functioning as an interconnection forum for movements, communities, and ideas working toward holistic regenerative transformation.",
      content:
        "This project functions as a 'Synergypedia' for the regenerative society movement, inspired by historical efforts like the Encyclopédie and the Whole Earth Catalog. Unlike traditional knowledge repositories, Ultimate Collaboration specifically focuses on interconnecting diverse communities working toward shared visions of holistic well-being. \n\nThe work operates at the intersection of digital librarianship and community building, providing not just information but pathways between seemingly disparate approaches. By mapping relationships between decentralized initiatives, technical innovations, and nature-focused communities, it reveals the common foundation beneath surface differences. \n\nBeyond content curation, Ultimate Collaboration embodies a cultural commitment to inclusivity, consent, and transparent communication. Its open-source development invites participation while establishing cultural standards that prioritize constructive engagement. The project rejects knowledge as static collection and instead positions it as an evolving ecosystem where users become active participants in both knowledge creation and cross-community translation.",
    },
    {
      id: 3,
      title: "rightless.ai",
      year: "2025",
      description:
        "A philosophical framework exploring the relationship between human and machine cognition while reimagining governance systems beyond traditional power structures.",
      content:
        "This project deconstructs the boundaries between human and artificial intelligence, revealing the common patterns underlying both forms of cognition. By examining the etymology and architecture of AI, it exposes the fallacy of distinction that has shaped our relationship with technology and proposes a more integrated understanding. \n\nThe work articulates two complementary paths forward: the 'Thought Path' of systems thinking and ethical architecture, and the 'Feel Path' of embodied experience, connection, and care. Rather than positioning these as opposing approaches, rightless.ai proposes their integration as essential for creating technology that serves human flourishing. \n\nCentrally, the project challenges legacy power structures built around violence and finance, offering instead a vision for consent-based governance and regenerative economics. Through its connection with the dreaming.now platform, it translates philosophical inquiry into practical systems for participatory budgeting and transparent resource allocation—moving beyond abstract rights to concrete relationships of responsibility and care.",
    },
    {
      id: 4,
      title: "Divizend Live",
      year: "2025",
      description:
        "A participatory financial ecosystem combining community building, transparent decision-making, and digital tools to foster global financial health.",
      content:
        "This system reimagines financial structures through radical transparency and participation. By combining livestreamed decision-making processes with a mobile companion app, Divizend Live creates an accessible framework where financial governance becomes a communal rather than institutional process. \n\nAt its core, the project embodies the principle of participation by default, transforming passive consumers into active stakeholders through microsolidarity structures and participatory budgeting. Traditional financial hierarchies are replaced with horizontal systems like the dreaming.now platform, where resource allocation becomes a democratic practice rather than a centralized function. \n\nThe work intentionally merges the digital and social dimensions of financial health, recognizing that economic systems are ultimately human systems. With open-source development and transparent governance, Divizend Live demonstrates how financial technologies can be designed to enhance human connection rather than replace it, creating patterns for genuine financial democracy rather than algorithmic automation.",
    },
    {
      id: 5,
      title: "Partei der Steuerverteilgerechtigkeit",
      year: "2025",
      description:
        "A political party implementing direct democratic control over tax allocation, enabling citizens to decide precisely how their tax contributions are used.",
      content:
        "This project translates abstract principles of fiscal democracy into concrete political structures within the German system. Unlike conventional political parties focused on policy positions, the Partei der Steuerverteilgerechtigkeit (Tax Distribution Justice Party) creates a framework where citizens gain equal decision-making power over public funds regardless of their income or tax contribution level. \n\nAt its foundation is a digital distribution platform where each citizen directs their per-capita share of the total tax revenue toward specific projects and categories. This system fundamentally restructures the relationship between citizen and state, transforming taxation from an obligation into a participatory act. For those who choose not to actively allocate their share, elected representatives determine a default distribution, ensuring functionality while preserving individual choice. \n\nBeyond technological implementation, the project emphasizes educational components that build financial literacy from childhood. By introducing participatory budgeting in schools and creating structured pathways for fiscal engagement, it establishes the cultural and cognitive infrastructure necessary for meaningful collective resource allocation. The three-phase implementation plan demonstrates how radical democratic principles can be pragmatically integrated into existing governance structures.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic background element that follows cursor */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="container mx-auto px-4 py-24 relative z-10">
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
            Creating unified systems that bridge philosophy and practice—where
            technology serves human connection, participation becomes default,
            and collective flourishing emerges through lived experience.
          </motion.p>
        </header>

        <main className="space-y-32">
          {/* Artist Introduction */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              The Artist
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                Henophilia operates as the systemic art practice of Julian
                Nalenz, whose trajectory from early technological immersion to
                philosophical inquiry shapes his approach to system design.
                Beginning programming at age 11 and later pursuing computer
                science studies across Munich and Stockholm, Nalenz developed a
                foundation in structured thinking while recognizing its
                limitations.
              </p>
              <p className="text-zinc-400">
                At 19, he co-founded Divizend, applying technical expertise to
                financial systems. However, by 22, his perspective expanded
                beyond technological solutionism toward a more integrated
                understanding of human flourishing. At age 24, this evolution
                culminated in Henophilia's distinctive methodology—creating
                inhabitable systems that honor the full spectrum of human
                experience rather than reducing it to mechanical efficiency or
                societal norms. His work consistently refuses false dichotomies
                between technological advancement and embodied humanity, instead
                building frameworks where both can mutually reinforce.
              </p>
            </div>
          </section>

          {/* About Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              The Unity of Systems
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                Henophilia—from the Greek "hen" (one) and "philia"
                (love)—creates livable frameworks where seemingly disparate
                systems converge. These aren't mere representations but
                functional environments where digital architectures, economic
                models, democratic processes, and political frameworks form
                cohesive habitats for sustained human participation.
              </p>
              <p className="text-zinc-400">
                Unlike temporary installations or conceptual art, these systems
                are designed for permanent occupation, enabling communities to
                inhabit alternative socio-economic structures. Each system
                becomes a microcosm where principles are not just visualized but
                operationalized for everyday living and collective
                decision-making.
              </p>
            </div>
          </section>

          {/* Works Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Works
            </h2>
            <div className="space-y-12">
              {works.map((work) => (
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
                  {work.title === "henophilia.org" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                      asChild
                    >
                      <a
                        href="https://henophilia.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit henophilia.org
                      </a>
                    </Button>
                  )}
                  {work.title === "Ultimate Collaboration" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                      asChild
                    >
                      <a
                        href="https://ultimatecollaboration.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit ultimatecollaboration.org
                      </a>
                    </Button>
                  )}
                  {work.title === "Divizend Live" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                      asChild
                    >
                      <a
                        href="https://live.divizend.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit live.divizend.com
                      </a>
                    </Button>
                  )}
                  {work.title === "rightless.ai" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                      asChild
                    >
                      <a
                        href="https://rightless.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit rightless.ai
                      </a>
                    </Button>
                  )}
                  {work.title === "Partei der Steuerverteilgerechtigkeit" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                      asChild
                    >
                      <a
                        href="https://steuerdemokratie.de"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit steuerdemokratie.de
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Systemic Methodology
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 mb-6">
                The methodology across these works embodies five core
                principles: participation by default, radical transparency,
                integration of diverse perspectives, minimal structure, and
                emergent complexity. Each system starts by eliminating the
                artificial boundary between creators and users, instead
                establishing frameworks where everyone becomes a co-creator of
                the inhabited system.
              </p>
              <p className="text-zinc-400 mb-6">
                Digital components are engineered to serve rather than replace
                human connection. Technology is utilized precisely where it
                amplifies participation and transparency, but intentionally
                withdrawn where direct human relationship would better serve the
                system's purpose. This creates environments that balance
                structured guidance with organic adaptation to actual human
                needs.
              </p>
              <p className="text-zinc-400">
                The most distinctive aspect of this methodology is its
                scale-bridging nature—connecting philosophical principles
                directly to practical implementation without intermediate
                abstraction. By modeling governance, communication, and resource
                allocation systems at human scale, each project demonstrates how
                alternative social structures can be not merely conceived but
                immediately inhabited. This eliminates the gap between theory
                and practice that often prevents transformative ideas from
                becoming lived reality.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-light mb-8 border-b border-zinc-800 pb-2">
              Connect
            </h2>
            <div className="max-w-lg">
              <p className="text-zinc-400 mb-8">
                For inquiries about implementations, community integration, or
                commissioned system development for permanent habitation, please
                use the contact information below.
              </p>

              <div className="space-y-4">
                <p className="text-zinc-300 flex items-center gap-2">
                  <span className="text-zinc-500">Email:</span>{" "}
                  <a
                    href="mailto:synergies@henophilia.art"
                    className="hover:text-white hover:underline"
                  >
                    synergies@henophilia.art
                  </a>
                </p>
                <p className="text-zinc-300 flex items-center gap-2">
                  <span className="text-zinc-500">Location:</span> Luttmissen,
                  Germany
                </p>

                <div className="flex gap-4 mt-8">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                          asChild
                        >
                          <a
                            href="https://instagram.com/henophilia"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
                            <span className="sr-only">Instagram</span>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Instagram</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                          asChild
                        >
                          <a
                            href="https://bsky.app/profile/henophilia.bsky.social"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5z" />
                              <path d="M9 12.55v3.45a3 3 0 0 0 6 0v-3.45" />
                              <path d="M22 12L12 17l-10-5" />
                            </svg>
                            <span className="sr-only">Bluesky</span>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Bluesky</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-zinc-800 bg-transparent hover:bg-zinc-800 text-white"
                          asChild
                        >
                          <a href="mailto:synergies@henophilia.art">
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
                              className="lucide lucide-mail"
                            >
                              <rect width="20" height="16" x="2" y="4" rx="2" />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span className="sr-only">Email</span>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Email</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="absolute bottom-6 w-full text-center text-zinc-600 text-xs">
        <p>
          © {new Date().getFullYear()} Henophilia · Inhabitable Systems Design
        </p>
      </footer>
    </div>
  );
}
