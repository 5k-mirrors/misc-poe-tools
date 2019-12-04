export const leaguesApi = () => {
  return proxy("http://api.pathofexile.com/leagues?type=main&compact=1");
};

export const itemsApi = (type, league) => {
  return proxy(`poe.ninja/api/data/${type}?league=${league}`);
};

const proxy = url => {
	return `https://c-hive-proxy.herokuapp.com/${url}`;
};
