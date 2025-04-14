import { Translation } from "../i18n-types";
import React from "react";

const en: Translation = {
  tagline: (
    <>
      I'm Julian, 25 years old, artist,{" "}
      <a
        href="https://link.springer.com/article/10.1007/s11625-020-00850-6"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        systems entrepreneur
      </a>
      , computer scientist and{" "}
      <a
        href="https://www.re-des.org/es/a-solarpunk-manifesto/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        solarpunk
      </a>
      . My mission is to improve the accessibility of and to popularize
      political, economical and digital systems which simply foster the growth
      of happier, healthier humans. One of my main tools is observing how humans
      actually are and which societal norms and taboos contribute to or hinder
      us from realizing our full potential. I'm particularly fascinated by the
      concept of constructing <i>inhabitable systems</i> that initially realize
      certain parts and eventually the entire spectrum of{" "}
      <a
        href="https://en.wikipedia.org/wiki/Public_service"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        public services
      </a>{" "}
      but in a significantly more transparent and democratic way than has been
      the case so far.
    </>
  ),
  works: [
    {
      id: 1,
      title: "henophilia.org",
      year: "2024",
      description:
        "The foundation manifesto and living document of Henophilia as a culture, philosophy, and way of life. This project articulates how unity-centered thinking can transform personal and collective existence.",
      content:
        "This artwork explores the concept of Henophilia—derived from the Greek 'hen' (one) and 'philia' (love)—as both a philosophical framework and practical approach to living. Unlike traditional systems that separate humans through hierarchical structures, Henophilia proposes an intercultural, global culture centered on unity. \n\nThe piece establishes Henophilia as the antithesis of nihilism, positioning it as a holistic belief system that internalizes divinity rather than externalizing it. This conceptual shift eliminates the power structures that typically emerge from religious or philosophical systems while maintaining their community-building benefits. \n\nAs an artwork, henophilia.org operates in the space between manifesto and living document, inviting participation rather than passive consumption. It rejects the commercialization of well-being and instead promotes decentralized organizational structures that can emerge organically when humans relate to each other through genuine connection and self-efficacy.",
      url: "https://henophilia.org",
    },
    {
      id: 2,
      title: "Ultimate Collaboration",
      year: "2024–today",
      description:
        "A digital encyclopedia functioning as an interconnection forum for movements, communities, and ideas working toward holistic regenerative transformation.",
      content:
        "This project functions as a 'Synergypedia' for the regenerative society movement, inspired by historical efforts like the Encyclopédie and the Whole Earth Catalog. Unlike traditional knowledge repositories, Ultimate Collaboration specifically focuses on interconnecting diverse communities working toward shared visions of holistic well-being. \n\nThe work operates at the intersection of digital librarianship and community building, providing not just information but pathways between seemingly disparate approaches. By mapping relationships between decentralized initiatives, technical innovations, and nature-focused communities, it reveals the common foundation beneath surface differences. \n\nBeyond content curation, Ultimate Collaboration embodies a cultural commitment to inclusivity, consent, and transparent communication. Its open-source development invites participation while establishing cultural standards that prioritize constructive engagement. The project rejects knowledge as static collection and instead positions it as an evolving ecosystem where users become active participants in both knowledge creation and cross-community translation.",
      url: "https://ultimatecollaboration.org",
    },
    {
      id: 3,
      title: "Divizend Live",
      year: "2025",
      description:
        "A participatory financial ecosystem combining community building, transparent decision-making, and digital tools to foster global financial health.",
      content:
        "This system reimagines financial structures through radical transparency and participation. By combining livestreamed decision-making processes with a mobile companion app, Divizend Live creates an accessible framework where financial governance becomes a communal rather than institutional process. \n\nAt its core, the project embodies the principle of participation by default, transforming passive consumers into active stakeholders through microsolidarity structures and participatory budgeting. Traditional financial hierarchies are replaced with horizontal systems like the dreaming.now platform, where resource allocation becomes a democratic practice rather than a centralized function. \n\nThe work intentionally merges the digital and social dimensions of financial health, recognizing that economic systems are ultimately human systems. With open-source development and transparent governance, Divizend Live demonstrates how financial technologies can be designed to enhance human connection rather than replace it, creating patterns for genuine financial democracy rather than algorithmic automation.",
      url: "https://live.divizend.com",
    },
    {
      id: 4,
      title: "rightless.ai",
      year: "2025",
      description:
        "A philosophical framework exploring the relationship between human and machine cognition while reimagining governance systems beyond traditional power structures.",
      content:
        "This project deconstructs the boundaries between human and artificial intelligence, revealing the common patterns underlying both forms of cognition. By examining the etymology and architecture of AI, it exposes the fallacy of distinction that has shaped our relationship with technology and proposes a more integrated understanding. \n\nThe work articulates two complementary paths forward: the 'Thought Path' of systems thinking and ethical architecture, and the 'Feel Path' of embodied experience, connection, and care. Rather than positioning these as opposing approaches, rightless.ai proposes their integration as essential for creating technology that serves human flourishing. \n\nCentrally, the project challenges legacy power structures built around violence and finance, offering instead a vision for consent-based governance and regenerative economics. Through its connection with the dreaming.now platform, it translates philosophical inquiry into practical systems for participatory budgeting and transparent resource allocation—moving beyond abstract rights to concrete relationships of responsibility and care.",
      url: "https://rightless.ai",
    },
    {
      id: 5,
      title: "Partei der Steuerverteilgerechtigkeit",
      year: "2025",
      description:
        "A political party implementing direct democratic control over tax allocation, enabling citizens to decide precisely how their tax contributions are used.",
      content:
        "This project translates abstract principles of fiscal democracy into concrete political structures within the German system. Unlike conventional political parties focused on policy positions, the Partei der Steuerverteilgerechtigkeit (Tax Distribution Justice Party) creates a framework where citizens gain equal decision-making power over public funds regardless of their income or tax contribution level. \n\nAt its foundation is a digital distribution platform where each citizen directs their per-capita share of the total tax revenue toward specific projects and categories. This system fundamentally restructures the relationship between citizen and state, transforming taxation from an obligation into a participatory act. For those who choose not to actively allocate their share, elected representatives determine a default distribution, ensuring functionality while preserving individual choice. \n\nBeyond technological implementation, the project emphasizes educational components that build financial literacy from childhood. By introducing participatory budgeting in schools and creating structured pathways for fiscal engagement, it establishes the cultural and cognitive infrastructure necessary for meaningful collective resource allocation. The three-phase implementation plan demonstrates how radical democratic principles can be pragmatically integrated into existing governance structures.",
      url: "https://steuerdemokratie.de",
    },
  ],
  sections: {
    artist: {
      title: "The Artist",
      paragraph1:
        "Henophilia operates as the systemic art practice of Julian Nalenz, whose trajectory from early technological immersion to philosophical inquiry shapes his approach to system design. Beginning programming at age 11 and later pursuing computer science studies across Munich and Stockholm, Nalenz developed a foundation in structured thinking while recognizing its limitations.",
      paragraph2:
        "At 19, he co-founded Divizend, applying technical expertise to financial systems. However, by 22, his perspective expanded beyond technological solutionism toward a more integrated understanding of human flourishing. At age 24, this evolution culminated in Henophilia's distinctive methodology—creating inhabitable systems that honor the full spectrum of human experience rather than reducing it to mechanical efficiency or societal norms. His work consistently refuses false dichotomies between technological advancement and embodied humanity, instead building frameworks where both can mutually reinforce. What distinguishes these systems is their inherent global scalability—rather than developing niche solutions that remain dependent on misaligned global structures, each system is designed as an evolutionary pathway capable of transforming existing patterns while functioning at planetary scale.",
    },
    unity: {
      title: "The Unity of Systems",
      paragraph1:
        'Henophilia—from the Greek "hen" (one) and "philia" (love)—creates livable frameworks where seemingly disparate systems converge. These aren\'t mere representations but functional environments where digital architectures, economic models, democratic processes, and political frameworks form cohesive habitats for sustained human participation.',
      paragraph2:
        "Unlike temporary installations or conceptual art, these systems are designed for permanent occupation, enabling communities to inhabit alternative socio-economic structures. Each system becomes a microcosm where principles are not just visualized but operationalized for everyday living and collective decision-making.",
    },
    works: {
      title: "Works",
    },
    methodology: {
      title: "Systemic Methodology",
      paragraph1:
        "The methodology across these works embodies five core principles: participation by default, radical transparency, integration of diverse perspectives, minimal structure, and emergent complexity. Each system starts by eliminating the artificial boundary between creators and users, instead establishing frameworks where everyone becomes a co-creator of the inhabited system.",
      paragraph2:
        "Digital components are engineered to serve rather than replace human connection. Technology is utilized precisely where it amplifies participation and transparency, but intentionally withdrawn where direct human relationship would better serve the system's purpose. This creates environments that balance structured guidance with organic adaptation to actual human needs.",
      paragraph3:
        "The most distinctive aspect of this methodology is its scale-bridging nature—connecting philosophical principles directly to practical implementation without intermediate abstraction. By modeling governance, communication, and resource allocation systems at human scale, each project demonstrates how alternative social structures can be not merely conceived but immediately inhabited. This eliminates the gap between theory and practice that often prevents transformative ideas from becoming lived reality.",
    },
    connect: {
      title: "Connect",
      paragraph:
        "For inquiries about collaborations or simply to say hi, please use the contact information below.",
      email: "Email:",
      location: "Location (last updated at 2025-04-06):",
      locationValue: "Lisbon, Portugal",
      social: {
        instagram: "Instagram",
        bluesky: "Bluesky",
        email: "Email",
        linkedin: "LinkedIn",
        blog: "Blog",
      },
    },
  },
  footer: "Henophilia · Inhabitable Systems Design",
  languageSwitcher: {
    label: "Language:",
    languages: {
      en: "English",
      de: "German",
    },
  },
};

export default en;
