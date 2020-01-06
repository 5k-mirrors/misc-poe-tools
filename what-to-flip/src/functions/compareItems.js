import { typeConfig } from "./poe-ninja";

export const cost = items => {
  let value = 0;

  for (const item of items) {
    const compareKey = typeConfig()[item.type].compare_key;
    value += item[compareKey];
  }

  return Math.round(value);
};

export const comparePrice = (baseItems, compareItems) => {
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
