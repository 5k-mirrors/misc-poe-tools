import React from "react";
import {fetchJSON} from '../functions/http'
import {itemsApi, comparisons} from '../functions/config'
import {metaLeagues, fetchLeagues} from '../functions/leagues'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comparisons: comparisons(),
      selectedMetaLeague: "Temp SC"
    }
  }

  componentDidMount() {
    const selectedMetaLeague = this.state.selectedMetaLeague;

    fetchLeagues().then((leagues) => {
      console.log(`Leagues: ${JSON.stringify(leagues)}`);
      this.setState({ leagues: leagues, selectedLeague: leagues[selectedMetaLeague] }, () => this.fetchItems('getFragmentoverview'));
    });
  };

  render() {
    return (
      <div>
      <h2>League:</h2>
      <select name="league" value={this.state.selectedMetaLeague} onChange={this.leagueSelected}>
        {metaLeagues().map(league => (
          <option key={league} value={league}>{league}</option>
        ))}
      </select>

      <h2>Differences:</h2>
        <ol>
        {this.state.comparisons.map((comparison, i) => (
          <li key={i}>
            <label>
              <span>{comparison.name}: {this.compare(comparison.base, comparison.compare)} chaos</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )
  }

  fetchItems = (type) => {
    console.log(`Selected league: ${this.state.selectedMetaLeague} - ${this.state.selectedLeague}`);
    return fetchJSON(itemsApi(type, this.state.selectedLeague)).then((items) => {
      console.log(`Fetched: ${items.lines.length} items`);
      this.setState({ items: items.lines });
    }).catch((error) => {
      console.error(`Couldn't fetch items: ${error}`);
    });
  }

  leagueSelected = (event) => {
    const selectedLeague = this.state.leagues[event.target.value];
    this.setState({ selectedLeague: selectedLeague, selectedMetaLeague: event.target.value }, () => this.fetchItems('getFragmentoverview'));
  };

  compare(base, compare) {
  	if(!this.state.items) {
      return "?";
    };

  	const find_key = "currencyTypeName";
    const compare_key = "chaosEquivalent";

  	const base_item = this.find(this.state.items, find_key, base);
    const compare_item = this.find(this.state.items, find_key, compare);

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
