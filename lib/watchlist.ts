export type WatchlistItem = {
  label: string;
  url: string;
};

export const WATCHLIST_TITLE = "My current watchlist";
export const WATCHLIST_LAST_UPDATED = "22 August 2026";

export const watchlist: WatchlistItem[] = [
  {
    label: "n3Builtins",
    url: "https://w3c-cg.github.io/n3Builtins/",
  },
  {
    label: "eyeling",
    url: "https://github.com/eyereasoner/eyeling",
  },
  {
    label: "An Introduction to Ontology Engineering",
    url: "https://people.cs.uct.ac.za/~mkeet/files/OEbook.pdf",
  },
  {
    label: "Taler Systems",
    url: "https://taler-systems.com/en/index.html",
  },
  {
    label: "Hets",
    url: "http://hets.eu/",
  },
  {
    label: "Ideas for a Standard for Federated Resource Exchange",
    url: "https://docs.google.com/document/d/1yJVLV2l3UWQFi42PHAKpuwO1GXMbvu-CGnxrNEztbts/edit?tab=t.0",
  },
  {
    label: "Parallel",
    url: "https://buildwithparallel.com/",
  },
];
