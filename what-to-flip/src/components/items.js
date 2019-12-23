import { useEffect } from "react";
import { fetchJSON } from "../functions/http";
import {
  itemsApi,
  typeConfigByCategory,
  typeConfig,
} from "../functions/poe-ninja";
import { useItems } from "../contexts/itemsContext";

const fetchItems = league => {
  const items = {};
  items[league] = {};

  const fetchPromises = Object.entries(typeConfigByCategory())
    .map(([category, categoryItems]) => {
      return Object.entries(categoryItems).map(([type, details]) => {
        const url = itemsApi(category, details.type, league);
        console.log(`Fetching ${type} items for ${league} league from ${url}`);
        return fetchJSON(url)
          .then(itemsForLeague => {
            console.log(
              `Fetched: ${itemsForLeague.lines.length} ${type} items`
            );
            items[league][type] = itemsForLeague.lines;
          })
          .catch(error => {
            console.error(`Couldn't fetch items: ${error}`);
          });
      });
    })
    .flat();

  return Promise.all(fetchPromises).then(() => {
    return items;
  });
};

const find = (items, league, name) => {
  let foundItem;
  for (const [type, details] of Object.entries(typeConfig())) {
    for (const item of items[league][type]) {
      if (item[details.name_key] === name) {
        foundItem = item;
        foundItem.type = type;
        break;
      }
    }
    if (foundItem !== undefined) {
      break;
    }
  }

  return foundItem;
};

export const useSelectedLeagueItems = selectedLeague => {
  const [items, setItems] = useItems();

  useEffect(() => {
    if (selectedLeague) {
      console.log(`${selectedLeague} league selected, updating items...`);
      fetchItems(selectedLeague).then(fetchedItems => {
        setItems(fetchedItems);
      });
    }
  }, [selectedLeague, setItems]);

  return items;
};

export const cost = (items, league, names) => {
  const foundItems = names.map(name => {
    return find(items, league, name);
  });

  if (foundItems.some(item => item === undefined)) return null;

  let value = 0;

  for (const item of foundItems) {
    const compareKey = typeConfig()[item.type].compare_key;
    value += item[compareKey];
  }

  return Math.round(value);
};

export const comparePrice = (items, league, baseNames, compareNames) => {
  const baseItems = baseNames.map(baseName => {
    return find(items, league, baseName);
  });
  const compareItems = compareNames.map(compareName => {
    return find(items, league, compareName);
  });

  if (
    baseItems.some(item => item === undefined) ||
    compareItems.some(item => item === undefined)
  )
    return null;

  let value = 0;

  for (const baseItem of baseItems) {
    const baseItemCompareKey = typeConfig()[baseItem.type].compare_key;
    value += baseItem[baseItemCompareKey];
  }

  for (const compareItem of compareItems) {
    const compareItemCompareKey = typeConfig()[compareItem.type].compare_key;
    value -= compareItem[compareItemCompareKey];
  }

  return Math.round(value);
};
