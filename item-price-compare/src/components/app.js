import React from "react";
import {comparisons} from '../functions/config'
import {metaLeagues, fetchLeagues} from '../functions/leagues'
import {fetchItems, comparePrice} from '../functions/items'

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
                {this.comparisonText(comparison)}
              </label>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  comparisonText(comparison) {
    let text = `${comparison.name}: ${this.compare(comparison.base, comparison.compare)} chaos`;
    if(comparison.comment) {
      text = text + ` (${comparison.comment})`;
    };

    return text
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

    const comparison = comparePrice(this.state.items, this.state.selectedLeague, base, compare);

    if(!comparison) {
      return "N/A";
    } else {
      return comparison;
    };
  };
}

export default App;
