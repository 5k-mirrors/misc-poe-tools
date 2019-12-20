import { useState, useEffect } from "react";

import { leaguesApi } from "../functions/config";
import { fetchJSON } from "../functions/http";

export const useLeagues = () => {
  const [leagues, setLeagues] = useState({});

  useEffect(() => {
    fetchLeagues().then(leagues => {
      console.log(`Leagues: ${JSON.stringify(leagues)}`);
      setLeagues(leagues);
    });
  }, []);

  return leagues;
};

export const metaLeagues = () => {
  return ["Temp SC", "Temp HC", "Standard", "Hardcore"];
};

const mapToMetaLeagues = leagues => {
  const tempLeagues = leagues.filter(leagueHash => {
    const leagueName = leagueHash.id;
    return !(
      ["ssf", "standard"].some(prohibitedWord =>
        leagueName.toLowerCase().includes(prohibitedWord)
      ) || leagueName.toLowerCase() === "hardcore"
    );
  });

  const tempSC = tempLeagues.filter(leagueHash => {
    return !leagueHash.id.toLowerCase().includes("hardcore");
  });

  const tempHC = tempLeagues.filter(leagueHash => {
    return leagueHash.id.toLowerCase().includes("hardcore");
  });

  if (tempSC.length !== 1 || tempHC.length !== 1) {
    throw new Error(
      `Couldn't indentify temp leagues in ${JSON.stringify(tempLeagues)}`
    );
  }

  return {
    "Temp SC": tempSC[0].id,
    "Temp HC": tempHC[0].id,
    Standard: "Standard",
    Hardcore: "Hardcore",
  };
};

const fetchLeagues = () => {
  return fetchJSON(leaguesApi())
    .then(leagues => {
      return mapToMetaLeagues(leagues);
    })
    .catch(error => {
      console.error(`Couldn't fetch leagues: ${error}`);
    });
};