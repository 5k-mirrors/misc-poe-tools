import React, { useState, useEffect } from "react";
import { comparisons } from "../functions/config";
import { metaLeagues, useLeagues } from "./leagues";
import { fetchItems, comparePrice, cost } from "../functions/items";

const useSelectedLeagueItems = (selectedLeague) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    if (selectedLeague) {
      console.log(`${selectedLeague} league selected, updating items...`);
      fetchItems(selectedLeague).then(items => {
        setItems(items);
      });
    };
  }, [selectedLeague]);

  return items;
};

export default () => {
  const [selectedMetaLeague, setSelectedMetaLeague] = useState("Temp SC");
  const [selectedLeague, setSelectedLeague] = useState();
  const leagues = useLeagues();
  const items = useSelectedLeagueItems(selectedLeague);
  const comparisonsByGroup = comparisons();

  useEffect(() => {
    setSelectedLeague(leagues[selectedMetaLeague]);
  }, [leagues, selectedMetaLeague]);

  const comparisonText = (comparison) => {
    let text = `${comparison.name}: `;

    if (
      !selectedLeague ||
      !items ||
      !items[selectedLeague]
    ) {
      text += "?";
      return text;
    }

    text += `${compareText(
      comparison.base,
      comparison.compare,
      items,
      selectedLeague,
    )} chaos profit`;

    const pieces = comparison.compare.length;

    if (pieces !== 0)
      text += `, cost: ${costText(
        comparison.compare,
        items,
        selectedLeague,
      )} chaos, pieces: ${pieces}`;

    if (comparison.comment) {
      text += ` (${comparison.comment})`;
    }

    return text;
  };

  const costText  = (names) => {
    const costText = cost(items, selectedLeague, names);

    if (!costText) {
      return "N/A";
    }
    return costText;
  }

  const compareText = (base, compare) => {
    const comparison = comparePrice(
      items,
      selectedLeague,
      base,
      compare
    );

    if (!comparison) {
      return "N/A";
    }
    return comparison;
  }

  return (
    <div>
      <h1>PoE - What to flip?</h1>
      <select
        name="league"
        value={selectedMetaLeague}
        onChange={event => setSelectedMetaLeague(event.target.value)}
      >
        {metaLeagues().map(league => (
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
