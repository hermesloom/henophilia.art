import { ReactNode } from "react";

export type Button = {
  text: string;
  url: string;
};

export type Work = {
  id: number;
  title: string;
  year: string;
  description: string;
  content: string;
  buttons?: Button[];
};

export type Translation = {
  tagline: ReactNode;
  works: Work[];
  sections: {
    artist: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string | ReactNode;
    };
    unity: {
      title: string;
      paragraph1: string;
      paragraph2: string;
    };
    works: {
      title: string;
    };
    methodology: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    connect: {
      title: string;
      email: string;
      social: {
        instagram: string;
        bluesky: string;
        email: string;
        linkedin: string;
        blog: string;
        github: string;
      };
    };
  };
  footer: string;
  languageSwitcher: {
    label: string;
    languages: {
      en: string;
      de: string;
    };
  };
};
