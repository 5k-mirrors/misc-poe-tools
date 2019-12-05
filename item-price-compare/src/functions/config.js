const proxy = url => {
  return `https://c-hive-proxy.herokuapp.com/${url}`;
};

export const leaguesApi = () => {
  return proxy("http://api.pathofexile.com/leagues?type=main&compact=1");
};

export const itemsApi = (type, league) => {
  return proxy(`poe.ninja/api/data/${type}?league=${league}`);
};

export const comparisons = () => {
  return {
    "Pure vs. normal Breachstones": [
      {
        name: "Chayula",
        base: "Chayula's Pure Breachstone",
        compare: ["Chayula's Breachstone"],
      },
      {
        name: "Uul-Netol",
        base: "Uul-Netol's Pure Breachstone",
        compare: ["Uul-Netol's Breachstone"],
      },
      {
        name: "Tul",
        base: "Tul's Pure Breachstone",
        compare: ["Tul's Breachstone"],
      },
      {
        name: "Xoph",
        base: "Xoph's Pure Breachstone",
        compare: ["Xoph's Breachstone"],
      },
      {
        name: "Esh",
        base: "Esh's Pure Breachstone",
        compare: ["Esh's Breachstone"],
      },
    ],
    "Fated uniques vs. their base + prophecy": [
      {
        name: "Kaom's Way",
        base: "Kaom's Way",
        compare: ["Kaom's Sign", "The King's Path"],
        comment: "location: Kaom's Stronghold (Act 4)",
      },
    ],
    "Divination cards vs. outcome": [
      {
        name: "The Hoarder",
        base: "Exalted Orb",
        compare: [
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
          "The Hoarder",
        ],
      },
    ],
  };
};
