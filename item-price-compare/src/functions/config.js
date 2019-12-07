const proxy = url => {
  return `https://c-hive-proxy.herokuapp.com/${url}`;
};

export const leaguesApi = () => {
  return proxy("http://api.pathofexile.com/leagues?type=main&compact=1");
};

export const itemsApi = (type, category, league) => {
  return proxy(
    `https://poe.ninja/api/data/${category}overview?league=${league}&type=${type}`
  );
};

export const comparisons = () => {
  return {
    "Pure vs. normal Breachstones": [
      {
        name: "Chayula",
        base: ["Chayula's Pure Breachstone"],
        compare: ["Chayula's Breachstone"],
      },
      {
        name: "Uul-Netol",
        base: ["Uul-Netol's Pure Breachstone"],
        compare: ["Uul-Netol's Breachstone"],
      },
      {
        name: "Tul",
        base: ["Tul's Pure Breachstone"],
        compare: ["Tul's Breachstone"],
      },
      {
        name: "Xoph",
        base: ["Xoph's Pure Breachstone"],
        compare: ["Xoph's Breachstone"],
      },
      {
        name: "Esh",
        base: ["Esh's Pure Breachstone"],
        compare: ["Esh's Breachstone"],
      },
    ],
    "Divination cards vs. outcome": [
      {
        name: "The Hoarder (Exalted Orb)",
        base: ["Exalted Orb"],
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
      {
        name: "Abandoned Wealth (3x Exalted Orb)",
        base: ["Exalted Orb", "Exalted Orb", "Exalted Orb"],
        compare: [
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
          "Abandoned Wealth",
        ],
      },
      {
        name: "Nook's Crown (Elder Bone Helmet ilvl100)",
        base: ["bone-helmet-86-elder"],
        compare: [
          "Nook's Crown",
          "Nook's Crown",
          "Nook's Crown",
          "Nook's Crown",
        ],
      },
    ],
    "Fated uniques vs. their base + prophecy": [
      {
        name: "Kaom's Way",
        base: ["Kaom's Way"],
        compare: ["Kaom's Sign", "The King's Path"],
        comment: "location: Kaom's Stronghold (Act 4)",
      },
    ],
    "Prophecy rewards": [
      {
        name: "Volkuur's Key",
        base: ["Volkuur's Key"],
        compare: ["The Unbreathing Queen V", "Cemetery Map"],
        comment: "location: Cemetery Map",
      },
    ],
    "Item prices": [
      {
        name: "Exalted Orb",
        base: ["Exalted Orb"],
        compare: [],
      },
    ],
  };
};
