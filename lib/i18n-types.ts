export type Work = {
  id: number;
  title: string;
  year: string;
  description: string;
  content: string;
  url: string;
};

export type Translation = {
  tagline: string;
  works: Work[];
  sections: {
    artist: {
      title: string;
      paragraph1: string;
      paragraph2: string;
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
      paragraph: string;
      email: string;
      location: string;
      locationValue: string;
      social: {
        instagram: string;
        bluesky: string;
        email: string;
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
