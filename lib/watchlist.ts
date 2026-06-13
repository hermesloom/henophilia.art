export type WatchlistItem = {
  label: string;
  url: string;
};

export const WATCHLIST_TITLE = "My current watchlist";
export const WATCHLIST_LAST_UPDATED = "13 June 2026";

export const watchlist: WatchlistItem[] = [
  {
    label: "n3Builtins",
    url: "https://w3c-cg.github.io/n3Builtins/",
  },
  {
    label: "eyeling",
    url: "https://github.com/eyereasoner/eyeling",
  },
];
