import React from "react";
import { useSelectedLeague } from "./leagues";
import { ItemsProvider } from "../contexts/items";
import { SingleExecutionLockProvider } from "../contexts/utils";
import { Comparisons } from "./comparisons";

const App = () => {
  const {
    metaLeagues,
    selectedMetaLeague,
    selectedLeague,
    setSelectedMetaLeague,
  } = useSelectedLeague();

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

      <SingleExecutionLockProvider>
        <ItemsProvider>
          <Comparisons selectedLeague={selectedLeague}></Comparisons>
        </ItemsProvider>
      </SingleExecutionLockProvider>
    </div>
  );
};

export default App;
