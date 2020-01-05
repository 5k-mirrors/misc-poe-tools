import React from "react";
import PropTypes from "prop-types";
import { comparePrice, cost } from "../functions/compareItems";
import { useSelectedLeagueItems } from "../contexts/items";
import { isDefined } from "../functions/utils";

// TODO: if this is a function component only using a hook, it might be alright to render these in a loop
export const Comparison = ({ selectedLeague, comparison }) => {
  console.log(
    `Using items from ${selectedLeague} league to compare ${JSON.stringify(
      comparison
    )}`
  );
  const items = useSelectedLeagueItems(selectedLeague);

  const dataAvailable = () => {
    return isDefined(items);
  };

  const compareText = (base, compare) => {
    const priceComparison = comparePrice(items, base, compare);

    if (!priceComparison) {
      return "N/A";
    }
    return priceComparison;
  };

  const costText = names => {
    const text = cost(items, names);

    if (!text) {
      return "N/A";
    }
    return text;
  };

  const comparisonText = () => {
    let text = `${comparison.name}: `;

    if (!dataAvailable()) {
      text += "?";
      return text;
    }

    text += `${compareText(comparison.base, comparison.compare)} chaos profit`;

    const pieces = comparison.compare.length;

    if (pieces !== 0)
      text += `, cost: ${costText(
        comparison.compare
      )} chaos, pieces: ${pieces}`;

    if (comparison.comment) {
      text += ` (${comparison.comment})`;
    }

    return text;
  };

  return <label>{comparisonText(comparison)}</label>;
};

Comparison.propTypes = {
  comparison: PropTypes.object,
  selectedLeague: PropTypes.string,
};
