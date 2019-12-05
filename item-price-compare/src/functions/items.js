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

export const comparePrice = (items, league, baseName, compareNames) => {
  const baseItem = find(items, league, baseName);
  const compareItems = compareNames.map((compareName) => {
    return find(items, league, compareName);
  });

  if(baseItem === undefined || compareItems.some(item => item === undefined)) return;

  const baseItemCompareKey = meta()[baseItem["type"]]["compare_key"];

  let value = baseItem[baseItemCompareKey];

  for (const compareItem of compareItems) {
    const compareItemCompareKey = meta()[compareItem["type"]]["compare_key"];
    value = value - compareItem[compareItemCompareKey];
  }

  return Math.round(value);
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
      compare_key: "chaosEquivalent"
    },
    prophecies: {
      url_path: "GetProphecyOverview",
      name_key: "name",
      compare_key: "chaosValue"
    },
    accessories: {
      url_path: "GetUniqueAccessoryOverview",
      name_key: "name",
      compare_key: "chaosValue"
    },
  }
};
