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
        name: "Amplification Rod",
        base: ["Amplification Rod"],
        compare: ["Reverberation Rod", "Power Magnified"],
        comment: "The Lunaris Temple Level 2 (Act 3 or Act 8)",
      },
      {
        name: "Atziri's Reflection",
        base: ["Atziri's Reflection"],
        compare: ["Atziri's Mirror", "The Queen's Sacrifice"],
        comment: "The Alluring Abyss",
      },
      {
        name: "Asenath's Chant",
        base: ["Asenath's Chant"],
        compare: ["Asenath's Mark", "Song of the Sekhema"],
        comment: "The Quarry(Act 9)",
      },
      {
        name: "Cameria's Avarice",
        base: ["Cameria's Avarice"],
        compare: ["Cameria's Maul", "Cold Greed"],
        comment: "Waterways Map",
      },
      {
        name: "Chaber Cairn",
        base: ["Chaber Cairn"],
        compare: ["Chober Chaber", "Faith Exhumed"],
        comment: "Mausoleum Map",
      },
      {
        name: "Corona Solaris",
        base: ["Corona Solaris"],
        compare: ["Eclipse Solaris", "Blinding Light"],
        comment: "Temple Map",
      },
      {
        name: "Cragfall",
        base: ["Cragfall"],
        compare: ["Craghead", "Heavy Blows"],
        comment: "The Old Fields(Act 2)",
      },
      {
        name: "Crystal Vault",
        base: ["Crystal Vault"],
        compare: ["Icetomb", "End of the Light"],
        comment: "The Brine King's Reef(Act 6)",
      },
      {
        name: "Death's Opus",
        base: ["Death's Opus"],
        compare: ["Death's Harp", "The Bowstring's Music"],
        comment: "The Dried Lake(Act 4)",
      },
      {
        name: "Deidbellow",
        base: ["Deidbellow"],
        compare: ["Deidbell", "Dying Cry"],
        comment: "The Ebony Barracks(Act 3)",
      },
      {
        name: "Doedre's Malevolence",
        base: ["Doedre's Malevolence"],
        compare: ["Doedre's Tenure", "The Malevolent Witch"],
        comment: "Phantasmagoria Map",
      },
      {
        name: "Doomfletch's Prism",
        base: ["Doomfletch's Prism"],
        compare: ["Doomfletch", "Ancient Doom"],
        comment: "The Ancient Pyramid(Act 2)",
      },
      {
        name: "Dreadbeak",
        base: ["Dreadbeak"],
        compare: ["Redbeak", "The Dreaded Rhoa"],
        comment: "Bog Map",
      },

      {
        name: "Dreadsurge",
        base: ["Dreadsurge"],
        compare: ["Dreadarc", "Burning Dread"],
        comment: "Shrine Map",
      },
      {
        name: "Duskblight",
        base: ["Duskblight"],
        compare: ["Dusktoe", "Agony at Dusk"],
        comment: "The Harvest(Act 4)",
      },
      {
        name: "Ezomyte Hold",
        base: ["Ezomyte Hold"],
        compare: ["Ezomyte Peak", "The Bloody Flowers Redux"],
        comment: "The Grain Gate(Act 8)",
      },
      {
        name: "Fox's Fortune",
        base: ["Fox's Fortune"],
        compare: ["Foxshade", "Dark Instincts"],
        comment: "The Temple of Decay Level 2 (Act 7)",
      },
      {
        name: "Frostferno",
        base: ["Frostferno"],
        compare: ["Heatshiver", "A Vision of Ice and Fire"],
        comment: "Estuary Map",
      },
      {
        name: "Geofri's Devotion",
        base: ["Geofri's Devotion"],
        compare: ["Geofri's Baptism", "Black Devotion"],
        comment: "Relic Chambers Map ",
      },
      {
        name: "Geofri's Legacy",
        base: ["Geofri's Legacy"],
        compare: ["Geofri's Crest", "The Bishop's Legacy"],
        comment: "Cursed Crypt Map",
      },
      {
        name: "Hrimburn",
        base: ["Hrimburn"],
        compare: ["Hrimsorrow", "Fire and Ice"],
        comment: "The Tidal Island (Act 1 or Act 6)",
      },
      {
        name: "Hrimnor's Dirge",
        base: ["Hrimnor's Dirge"],
        compare: ["Hrimnor's Hymn", "Winter's Mournful Melodies"],
        comment: "The Fellshrine Ruins (Act 2)",
      },
      {
        name: "Hyrri's Demise",
        base: ["Hyrri's Demise"],
        compare: ["Hyrri's Bite", "A Dishonourable Death"],
        comment: "The Mud Flats (Act 6)",
      },
      {
        name: "Kaltensoul",
        base: ["Kaltensoul"],
        compare: ["Kaltenhalt", "The Snuffed Flame"],
        comment: "The Lower Prison(Act 1 or Act 6)",
      },
      {
        name: "Kaom's Way",
        base: ["Kaom's Way"],
        compare: ["Kaom's Sign", "The King's Path"],
        comment: "Kaom's Stronghold(Act 4)",
      },
      {
        name: "Karui Charge",
        base: ["Karui Charge"],
        compare: ["Karui Ward", "The Karui Rebellion"],
        comment: "The Grain Gate(Act 8)",
      },
      {
        name: "Malachai's Awakening",
        base: ["Malachai's Awakening"],
        compare: ["Malachai's Simula", "The Nightmare Awakens"],
        comment: "Core Map",
      },
      {
        name: "Martyr's Crown",
        base: ["Martyr's Crown"],
        compare: ["Crown of Thorns", "Pleasure and Pain"],
        comment: "The Harvest(Act 4) or Core Map",
      },
      {
        name: "Mirebough",
        base: ["Mirebough"],
        compare: ["Fencoil", "Trapped in the Tower"],
        comment: "The Sceptre of God(Act 3)",
      },
      {
        name: "Ngamahu Tiki",
        base: ["Ngamahu Tiki"],
        compare: ["Araku Tiki", "A Forest of False Idols"],
        comment: "Kaom's Dream(Act 4)",
      },
      {
        name: "Panquetzaliztli",
        base: ["Panquetzaliztli"],
        compare: ["Quecholli", "The Fall of an Empire"],
        comment: "Maze Map",
      },
      {
        name: "Queen's Escape",
        base: ["Queen's Escape"],
        compare: ["Queen's Decree", "The Misunderstood Queen"],
        comment: "The Belly of the Beast Level 1(Act 4)",
      },
      {
        name: "Realm Ender",
        base: ["Realm Ender"],
        compare: ["Realmshaper", "The Beginning and the End"],
        comment: "The Crypt Level 2(Act 2)",
      },
      {
        name: "Sanguine Gambol",
        base: ["Sanguine Gambol"],
        compare: ["Goredrill", "Crimson Hues"],
        comment: "Overgrown Ruin Map",
      },
      {
        name: "Shavronne's Gambit",
        base: ["Shavronne's Gambit"],
        compare: ["Shavronne's Pace", "The Flow of Energy"],
        comment: "The Harvest(Act 4)",
      },
      {
        name: "Silverbough",
        base: ["Silverbough"],
        compare: ["Silverbranch", "The Silverwood"],
        comment: "The Riverways (Act 2)",
      },
      {
        name: "Sunspite",
        base: ["Sunspite"],
        compare: ["Sundance", "Sun's Punishment"],
        comment: "The Solaris Temple Level 2 (Act 8)",
      },
      {
        name: "The Cauteriser",
        base: ["The Cauteriser"],
        compare: ["Limbsplit", "Severed Limbs"],
        comment: "The Mines Level 2(Act 4)",
      },
      {
        name: "The Dancing Duo",
        base: ["The Dancing Duo"],
        compare: ["The Dancing Dervish", "Dance of Steel"],
        comment: "Arsenal Map",
      },
      {
        name: "The Effigon",
        base: ["The Effigon"],
        compare: ["The Ignomon", "Blind Faith"],
        comment: "Haunted Mansion Map",
      },
      {
        name: "The Gryphon",
        base: ["The Gryphon"],
        compare: ["The Screaming Eagle", "The Apex Predator"],
        comment: "The Aqueduct(Act 4)",
      },
      {
        name: "The Nomad",
        base: ["The Nomad"],
        compare: ["The Magnate", "The Great Leader of the North"],
        comment: "The Foothills(Act 9)",
      },
      {
        name: "The Oak",
        base: ["The Oak"],
        compare: ["Springleaf", "Nature's Resilience"],
        comment: "The Southern Forest (Act 2)",
      },
      {
        name: "The Signal Fire",
        base: ["The Signal Fire"],
        compare: ["Blackgleam", "Fire and Brimstone"],
        comment: "The Crematorium(Act 3)",
      },
      {
        name: "The Stormwall",
        base: ["The Stormwall"],
        compare: ["The Stormheart", "The Storm Spire"],
        comment: "Plateau Map",
      },
      {
        name: "The Tempest",
        base: ["The Tempest"],
        compare: ["Storm Cloud", "The Servant's Heart"],
        comment: "The Chamber of Sins Level 2 (Act 2)",
      },
      {
        name: "Thirst for Horrors",
        base: ["Thirst for Horrors"],
        compare: ["Chalice of Horrors", "Mouth of Horrors"],
        comment: "The Harvest (Act 4) or The Toxic Conduits (Act 8) ",
      },
      {
        name: "Timetwist",
        base: ["Timetwist"],
        compare: ["Timeclasp", "A Rift in Time"],
        comment: "Laboratory Map ",
      },
      {
        name: "Voidheart",
        base: ["Voidheart"],
        compare: ["Blackheart", "From The Void"],
        comment: "",
      },
      {
        name: "Wall of Brambles",
        base: ["Wall of Brambles"],
        compare: ["Bramblejack", "The King and the Brambles"],
        comment: "The Grand Arena(Act 4)",
      },
      {
        name: "Whakatutuki o Matua",
        base: ["Whakatutuki o Matua"],
        compare: ["Matua Tupuna", "The Mentor"],
        comment: "Basilica Map",
      },
      {
        name: "Wildwrap",
        base: ["Wildwrap"],
        compare: ["Briskwrap", "Last of the Wildmen"],
        comment: "Strand Map",
      },
      {
        name: "Windshriek",
        base: ["Windshriek"],
        compare: ["Windscream", "Darktongue's Shriek"],
        comment: "Sepulchre Map",
      },
      {
        name: "Winterweave",
        base: ["Winterweave"],
        compare: ["Bloodboil", "Cold Blooded Fury"],
        comment: "Beach Map",
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
    "Incursion uniques (vials excluded)": [
      {
        name: "Apep's Supremacy",
        base: ["Apep's Supremacy"],
        compare: ["Apep's Slumber"],
        comment:
          "Vial of Awakening: https://www.pathofexile.com/trade/search/Metamorph/KYVR6Ri5",
      },
      {
        name: "Slavedriver's Hand",
        base: ["Slavedriver's Hand"],
        compare: ["Architect's Hand"],
        comment:
          "Vial of Dominance: https://www.pathofexile.com/trade/search/Metamorph/q2Ew93Cg",
      },
      {
        name: "Mask of the Stitched Demon",
        base: ["Mask of the Stitched Demon"],
        compare: ["Mask of the Spirit Drinker"],
        comment:
          "Vial of Summoning: https://www.pathofexile.com/trade/search/Metamorph/mZprJJH6",
      },
      {
        name: "Coward's Legacy",
        base: ["Coward's Legacy"],
        compare: ["Coward's Chains"],
        comment:
          "Vial of Consequence: https://www.pathofexile.com/trade/search/Metamorph/REManrf7",
      },
      {
        name: "Fate of the Vaal",
        base: ["Fate of the Vaal"],
        compare: ["Story of the Vaal"],
        comment:
          "Vial of Fate: https://www.pathofexile.com/trade/search/Metamorph/ak4Q2pte",
      },
      {
        name: "Omeyocan",
        base: ["Omeyocan"],
        compare: ["Dance of the Offered"],
        comment:
          "Vial of the Ritual: https://www.pathofexile.com/trade/search/Metamorph/9d9Wk4uK",
      },
      {
        name: "Zerphi's Heart",
        base: ["Zerphi's Heart"],
        compare: ["Sacrificial Heart"],
        comment:
          "Vial of Sacrifice: https://www.pathofexile.com/trade/search/Metamorph/pY25JWi0",
      },
      {
        name: "Soul Ripper",
        base: ["Soul Ripper"],
        compare: ["Soul Catcher"],
        comment:
          "Vial of the Ghost: https://www.pathofexile.com/trade/search/Metamorph/rGdy0gHQ",
      },
      {
        name: "Transcendent Flesh",
        base: ["Transcendent Flesh"],
        compare: ["Tempered Flesh"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw",
      },
      {
        name: "Transcendent Mind",
        base: ["Transcendent Mind"],
        compare: ["Tempered Mind"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw",
      },
      {
        name: "Transcendent Spirit",
        base: ["Transcendent Spirit"],
        compare: ["Tempered Spirit"],
        comment:
          "Vial of Transcendence: https://www.pathofexile.com/trade/search/Metamorph/Q34bbRuw",
      },
    ],
  };
};
