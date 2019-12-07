export const proxy = url => {
  return `https://c-hive-proxy.herokuapp.com/${url}`;
};

export const leaguesApi = () => {
  return proxy("http://api.pathofexile.com/leagues?type=main&compact=1");
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
        comment: "Kaom's Stronghold (Act 4)",
      },
    ],
    "Prophecy rewards": [
      {
        name: "Volkuur's Key",
        base: ["Volkuur's Key"],
        compare: ["The Unbreathing Queen V", "Cemetery Map"],
        comment: "Cemetery Map",
      },
    ],
    "Gilded Scarabs": [
      {
        name: "Sulphite",
        base: ["Gilded Sulphite Scarab"],
        compare: [],
        comment: "Cameria",
      },
      {
        name: "Legion",
        base: ["Gilded Legion Scarab"],
        compare: [],
        comment: "Vagan",
      },
      {
        name: "Harbinger",
        base: ["Gilded Harbinger Scarab"],
        compare: [],
        comment: "Tora",
      },
      {
        name: "Bestiary",
        base: ["Gilded Bestiary Scarab"],
        compare: [],
        comment: "Jorgin",
      },
      {
        name: "Divination",
        base: ["Gilded Divination Scarab"],
        compare: [],
        comment: "Gravicius",
      },
      {
        name: "Cartography",
        base: ["Gilded Cartography Scarab"],
        compare: [],
        comment: "Rin",
      },
      {
        name: "Torment",
        base: ["Gilded Torment Scarab"],
        compare: [],
        comment: "Leo",
      },
      {
        name: "Shaper",
        base: ["Gilded Shaper Scarab"],
        compare: [],
        comment: "Vorici",
      },
      {
        name: "Elder",
        base: ["Gilded Elder Scarab"],
        compare: [],
        comment: "Korell",
      },
      {
        name: "Reliquary",
        base: ["Gilded Reliquary Scarab"],
        compare: [],
        comment: "Elreon",
      },
      {
        name: "Breach",
        base: ["Gilded Breach Scarab"],
        compare: [],
        comment: "It That Fled",
      },
      {
        name: "Ambush",
        base: ["Gilded Ambush Scarab"],
        compare: [],
        comment: "Haku",
      },
      {
        name: "Perandus",
        base: ["Gilded Perandus Scarab"],
        compare: [],
        comment: "Janus",
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
