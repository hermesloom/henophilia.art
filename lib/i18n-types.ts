import { ReactNode } from "react";

export type Button = {
  text: string;
  url: string;
};

export type Work = {
  title: string;
  year: string;
  description: string;
  buttons?: Button[];
};

export type Translation = {
  tagline: ReactNode;
  works: Work[];
  sections: {
    works: {
      title: string;
    };
    methodology: {
      title: string;
      paragraphs: string[];
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
};
