import React from "react";
import { fetchJSON } from "../functions/http";
import {
  itemsApi,
  typeConfigByCategory,
  typeConfig,
} from "../functions/poe-ninja";
import { useEnsureProvider, useSingleExecutionLock } from "./utils";
import { deepClone } from "../functions/utils";

const ItemsContext = React.createContext();

export const useItems = () => {
  return useEnsureProvider(ItemsContext);
};

export const ItemsProvider = props => {
  const [items, setItems] = React.useState({});

  const value = React.useMemo(() => [items, setItems], [items]);

  return <ItemsContext.Provider value={value} {...props} />;
};

const find = (items, name) => {
  if (!items) return null;
  let foundItem;
  for (const [type, details] of Object.entries(typeConfig())) {
    for (const item of items[type]) {
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

const fetchItems = league => {
  const items = {};

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
            items[type] = itemsForLeague.lines;
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

export const useSelectedLeagueItems = selectedLeague => {
  const [items, setItems] = useItems();
  const fetchAllowed = useSingleExecutionLock(selectedLeague);

  React.useEffect(() => {
    if (!selectedLeague) return;

    if (!items[selectedLeague] && fetchAllowed) {
      console.log(`${selectedLeague} league selected, fetching items...`);
      fetchItems(selectedLeague).then(fetchedItems => {
        const mergedItems = Object.assign(deepClone(items), {
          [selectedLeague]: fetchedItems,
        });
        setItems(mergedItems);
      });
    }
  }, [fetchAllowed, items, selectedLeague, setItems]);

  return items[selectedLeague];
};

export const useFindItems = (league, names) => {
  const items = useSelectedLeagueItems(league);
  return names.map(name => {
    return find(items, name);
  });
};
