import React from "react";
import PropTypes from "prop-types";
import { comparisons } from "../functions/config";
import { Comparison } from "./comparison";

export const Comparisons = ({ selectedLeague }) => {
  const comparisonsByGroup = comparisons();

  return (
    <ol>
      {Object.keys(comparisonsByGroup).map(group => (
        <div key={group}>
          <h2>{group}</h2>
          {comparisonsByGroup[group].map((comparison, i) => (
            <li key={i}>
              <Comparison
                selectedLeague={selectedLeague}
                comparison={comparison}
              />
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
