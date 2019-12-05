import React from "react";
import {comparisons} from '../functions/config'
import {metaLeagues, fetchLeagues} from '../functions/leagues'
import {fetchItems, find} from '../functions/items'

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
      this.setState({ leagues: leagues, selectedLeague: leagues[selectedMetaLeague] }, () => this.updateItems());
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

  updateItems = () => {
    fetchItems(this.state.selectedLeague).then(items => {
      this.setState({ items: items });
    });
  };

  leagueSelected = (event) => {
    const selectedLeague = this.state.leagues[event.target.value];
    this.setState({ selectedLeague: selectedLeague, selectedMetaLeague: event.target.value }, () => this.updateItems());
  };

  compare(base, compare) {
  	if(!this.state.selectedLeague || !this.state.items || !this.state.items[this.state.selectedLeague]) {
      return "?";
    };

    const compare_key = "chaosEquivalent";

  	const base_item = find(this.state.items, this.state.selectedLeague, base);
    const compare_item = find(this.state.items, this.state.selectedLeague, compare);

    if(!base_item || !compare_item) {
      return "N/A";
    };

  	return Math.round(base_item[compare_key] - compare_item[compare_key]);
  }
}

export default App;
