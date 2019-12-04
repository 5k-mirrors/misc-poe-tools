import React from "react";

const leaguesTransformer = leagues => {
  let tempLeagues = leagues.filter(leagueHash => {
    let leagueName = leagueHash["id"];
    return !(["ssf", "standard"].some(prohibitedWord =>
      leagueName.toLowerCase().includes(prohibitedWord)
    ) || leagueName.toLowerCase() === "hardcore");
  });

  let tempSC = tempLeagues.filter(leagueHash => {
    return !leagueHash["id"].toLowerCase().includes("hardcore");
  });

  let tempHC = tempLeagues.filter(leagueHash => {
    return leagueHash["id"].toLowerCase().includes("hardcore");
  });

  if(tempSC.length !== 1 || tempHC.length !== 1) {
    throw new Error(`Couldn't indentify temp leagues in ${JSON.stringify(tempLeagues)}`);
  }

  return {
    "Temp SC": tempSC[0]["id"],
    "Temp HC": tempHC[0]["id"],
    "Standard": "Standard",
    "Hardcore": "Hardcore",
  };
};

const leagues = () => {
  return ["Temp SC", "Temp HC", "Standard", "Hardcore"];
};

const getProxyURL = url => {
	return `https://c-hive-proxy.herokuapp.com/${url}`;
};

const fetchLeagues = () => {
  const fetchUrl = "http://api.pathofexile.com/leagues?type=main&compact=1";
  const apiURL = getProxyURL(fetchUrl);
  return fetch(apiURL).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.text().then(textResponse => {
        throw new Error(`HTTP error: ${response.status} - ${textResponse}`)
      })
    }
  }).then((parsedResponse) => {
    return leaguesTransformer(parsedResponse);
  }).catch((error) => {
    console.error(`Couldn't fetch leagues: ${error}`);
  });
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
      	{ name: "Chayula pure vs normal", base: "Chayula's Pure Breachstone", compare: "Chayula's Breachstone" },
        { name: "Uul-Netol pure vs normal", base: "Uul-Netol's Pure Breachstone", compare: "Uul-Netol's Breachstone" },
        { name: "Tul pure vs normal", base: "Tul's Pure Breachstone", compare: "Tul's Breachstone" },
        { name: "Xoph pure vs normal", base: "Xoph's Pure Breachstone", compare: "Xoph's Breachstone" },
        { name: "Esh pure vs normal", base: "Esh's Pure Breachstone", compare: "Esh's Breachstone" },
      ]
    }
  }

  componentDidMount() {
    let defaultLeague = "Temp SC"

    fetchLeagues().then((leagues) => {
      console.log(`Leagues: ${JSON.stringify(leagues)}`);
      this.setState({ leagues: leagues, selectedLeague: leagues[defaultLeague] }, () => this.fetchItems('getFragmentoverview'));
    });
  };

  render() {
    return (
      <div>
      <h2>League:</h2>
      <select name="league" value={this.state.selectedLeague} onChange={this.leagueSelected}>
        {leagues().map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <h2>Differences:</h2>
        <ol>
        {this.state.items.map((item, i) => (
          <li key={i}>
            <label>
              <span>{item.name}: {this.compare(item.base, item.compare)} chaos</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )
  }

  fetchItems = (type) => {
    console.log(`Selected league: ${this.state.selectedLeague}`);
    return fetch(getProxyURL(`poe.ninja/api/data/${type}?league=${this.state.selectedLeague}`)).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.text().then(textResponse => {
          throw new Error(`HTTP error: ${response.status} - ${textResponse}`)
        })
      }
    }).then((parsed_response) => {
      let data = parsed_response.lines;
      console.log(`Fetched: ${data.length} items`);
      this.setState({ data: data });
    }).catch((error) => {
      console.error(`Couldn't fetch items: ${error}`);
    });
  }

  leagueSelected = (event) => {
    let selectedLeague = this.state.leagues[event.target.value];
    this.setState({ selectedLeague: selectedLeague }, () => this.fetchItems('getFragmentoverview'));
  };

  compare(base, compare) {
  	if(!this.state.data) {
      return "?";
    };

  	const find_key = "currencyTypeName";
    const compare_key = "chaosEquivalent";

  	const base_item = this.find(this.state.data, find_key, base);
    const compare_item = this.find(this.state.data, find_key, compare);

    if(!base_item || !compare_item) {
      return "N/A";
    };

  	return Math.round(base_item[compare_key] - compare_item[compare_key]);
  }
  
  find(data, key, name) {
  	return data.filter((elem) => {
    	return elem[key] === name
    })[0]
  }
}

export default App;
