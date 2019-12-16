import { proxy } from "./config";

export const itemsApi = (category, type, league) => {
  return proxy(
    `https://poe.ninja/api/data/${category}overview?league=${league}&type=${type}`
  );
};

export const typeConfigByCategory = () => {
  return {
    currency: {
      currencies: {
        type: "Currency",
        name_key: "currencyTypeName",
        compare_key: "chaosEquivalent",
      },
      fragments: {
        type: "Fragment",
        name_key: "currencyTypeName",
        compare_key: "chaosEquivalent",
      },
    },
    item: {
      prophecies: {
        type: "Prophecy",
        name_key: "name",
        compare_key: "chaosValue",
      },
      accessories: {
        type: "UniqueAccessory",
        name_key: "name",
        compare_key: "chaosValue",
      },
      weapons: {
        type: "UniqueWeapon",
        name_key: "name",
        compare_key: "chaosValue",
      },
      armours: {
        type: "UniqueArmour",
        name_key: "name",
        compare_key: "chaosValue",
      },
      divination_cards: {
        type: "DivinationCard",
        name_key: "name",
        compare_key: "chaosValue",
      },
      base_types: {
        type: "BaseType",
        name_key: "detailsId",
        compare_key: "chaosValue",
      },
      maps: {
        type: "Map",
        name_key: "name",
        compare_key: "chaosValue",
      },
      scarabs: {
        type: "Scarab",
        name_key: "name",
        compare_key: "chaosValue",
      },
      jewels: {
        type: "UniqueJewel",
        name_key: "name",
        compare_key: "chaosValue",
      },
      flasks: {
        type: "UniqueFlask",
        name_key: "name",
        compare_key: "chaosValue",
      },
    },
  };
};

export const typeConfig = () => {
  let config = {};

  for (const [, categoryItems] of Object.entries(typeConfigByCategory())) {
    config = Object.assign(config, categoryItems);
  }

  return config;
};
