import React from "react";
import { comparisons } from "../functions/config";
import { useSelectedLeague } from "./leagues";
import { useSelectedLeagueItems, comparePrice, cost } from "./items";

const App = () => {
  const [
    metaLeagues,
    selectedMetaLeague,
    selectedLeague,
    setSelectedMetaLeague,
  ] = useSelectedLeague();
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
    <div>
      <h1>PoE - What to flip?</h1>
      <select
        name="league"
        value={selectedMetaLeague}
        onChange={event => setSelectedMetaLeague(event.target.value)}
      >
        {metaLeagues.map(league => (
          <option key={league} value={league}>
            {league}
          </option>
        ))}
      </select>

      <ol>
        {Object.keys(comparisonsByGroup).map(group => (
          <div key={group}>
            <h2>{group}</h2>
            {comparisonsByGroup[group].map((comparison, i) => (
              <li key={i}>
                <label>
                  {comparisonText(comparison, selectedLeague, items)}
                </label>
              </li>
            ))}
          </div>
        ))}
      </ol>
    </div>
  );
};

export default App;
