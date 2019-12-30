import { typeConfig } from "./poe-ninja";
import { find } from "../contexts/items";

export const cost = (items, names) => {
  const foundItems = names.map(name => {
    return find(items, name);
  });

  if (foundItems.some(item => item === undefined)) return null;

  let value = 0;

  for (const item of foundItems) {
    const compareKey = typeConfig()[item.type].compare_key;
    value += item[compareKey];
  }

  return Math.round(value);
};

export const comparePrice = (items, baseNames, compareNames) => {
  const baseItems = baseNames.map(baseName => {
    return find(items, baseName);
  });
  const compareItems = compareNames.map(compareName => {
    return find(items, compareName);
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
