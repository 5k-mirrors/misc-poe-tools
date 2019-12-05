import {fetchJSON} from './http'
import {itemsApi} from './config'

export const fetchItems = (league) => {
  const items = {};
  items[league] = {};

  return Promise.all(
    Object.entries(meta()).map(([type, details]) => {
      const url = itemsApi(details['url_path'], league);
      console.log(`Fetching ${type} items for ${league} league from ${url}`);
      return fetchJSON(url).then((itemsForLeague) => {
        console.log(`Fetched: ${itemsForLeague.lines.length} ${type} items`);
        items[league][type] = itemsForLeague.lines;
      }).catch((error) => {
        console.error(`Couldn't fetch items: ${error}`);
      });
    })
  ).then(() => {
    return items;
  });
}

export const comparePrice = (items, league, baseName, compareName) => {
  const baseItem = find(items, league, baseName);
  const compareItem = find(items, league, compareName);

  if(!baseItem || !compareItem) return;

  const baseItemCompareKey = meta()[baseItem["type"]]["compare_key"];
  const compareItemCompareKey = meta()[compareItem["type"]]["compare_key"];

  return Math.round(baseItem[baseItemCompareKey] - compareItem[compareItemCompareKey]);
};

const find = (items, league, name) => {
  let foundItem;
  for (const [type, details] of Object.entries(meta())) {
    for (const item of items[league][type]) {
      if (item[details['name_key']] === name) {
        foundItem = item;
        foundItem['type'] = type
        break;
      };
    };
    if(foundItem !== undefined) {
      break;
    }
  };

  return foundItem;
};

const meta = () => {
  return {
    fragments: {
      url_path: "getFragmentoverview",
      name_key: "currencyTypeName",
      price_key: "chaosEquivalent"
    }
  }
};
