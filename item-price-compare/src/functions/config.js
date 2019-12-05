export const leaguesApi = () => {
  return proxy("http://api.pathofexile.com/leagues?type=main&compact=1");
};

export const itemsApi = (type, league) => {
  return proxy(`poe.ninja/api/data/${type}?league=${league}`);
};

export const comparisons = () => {
  return [
    { name: "Chayula pure vs normal", base: "Chayula's Pure Breachstone", compare: ["Chayula's Breachstone"] },
    { name: "Uul-Netol pure vs normal", base: "Uul-Netol's Pure Breachstone", compare: ["Uul-Netol's Breachstone"] },
    { name: "Tul pure vs normal", base: "Tul's Pure Breachstone", compare: ["Tul's Breachstone"] },
    { name: "Xoph pure vs normal", base: "Xoph's Pure Breachstone", compare: ["Xoph's Breachstone"] },
    { name: "Esh pure vs normal", base: "Esh's Pure Breachstone", compare: ["Esh's Breachstone"] },
    { name: "Kaom's Way vs Kaom's Sign", base: "Kaom's Way", compare: ["Kaom's Sign", "The King's Path"], comment: "location: Kaom's Stronghold (Act 4)"},
  ];
};

const proxy = url => {
	return `https://c-hive-proxy.herokuapp.com/${url}`;
};
