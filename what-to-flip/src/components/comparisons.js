import React from "react";
import PropTypes from "prop-types";
import { comparisons } from "../functions/config";
import { useSelectedLeagueItems, comparePrice, cost } from "./items";

export const Comparisons = ({ selectedLeague }) => {
  const items = useSelectedLeagueItems(selectedLeague);
  const comparisonsByGroup = comparisons();

  const dataAvailable = () => {
    return selectedLeague && items && items[selectedLeague];
  };

  const compareText = (base, compare) => {
    const comparison = comparePrice(items, selectedLeague, base, compare);

    if (!comparison) {
      return "N/A";
    }
    return comparison;
  };

  const costText = names => {
    const text = cost(items, selectedLeague, names);

    if (!text) {
      return "N/A";
    }
    return text;
  };

  const comparisonText = comparison => {
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

  return (
    <ol>
      {Object.keys(comparisonsByGroup).map(group => (
        <div key={group}>
          <h2>{group}</h2>
          {comparisonsByGroup[group].map((comparison, i) => (
            <li key={i}>
              <label>{comparisonText(comparison, selectedLeague, items)}</label>
            </li>
          ))}
        </div>
      ))}
    </ol>
  );
};

Comparisons.propTypes = {
  selectedLeague: PropTypes.string,
};
