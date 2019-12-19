import React, { useState, useEffect } from "react";
import { comparisons } from "../functions/config";
import { metaLeagues, fetchLeagues } from "../functions/leagues";
import { fetchItems, comparePrice, cost } from "../functions/items";

export default () => {
  const [selectedMetaLeague, setSelectedMetaLeague] = useState("Temp SC");
  const [comparisonsByGroup, setComparisonsByGroup] = useState(comparisons());
  const [leagues, setLeagues] = useState({});
  const [selectedLeague, setSelectedLeague] = useState();
  const [items, setItems] = useState({});

  useEffect(() => {
    fetchLeagues().then(leagues => {
      console.log(`Leagues: ${JSON.stringify(leagues)}`);
      setLeagues(leagues, () => {
        setSelectedLeague(leagues[selectedMetaLeague], () => {
          updateItems(selectedLeague, setItems);
        });
      });
    });
  });

  return (
    <div>
      <h1>PoE - What to flip?</h1>
      <select
        name="league"
        value={selectedMetaLeague}
        onChange={event => leagueSelected(event)}
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
                  hi
                  {/* {comparisonText(comparison)} */}
                  </label>
              </li>
            ))}
          </div>
        ))}
      </ol>
    </div>
  );
};

const comparisonText = (comparison) => {
  let text = `${comparison.name}: `;

  if (
    !this.state.selectedLeague ||
    !this.state.items ||
    !this.state.items[this.state.selectedLeague]
  ) {
    text += "?";
    return text;
  }

  text += `${this.compareText(
    comparison.base,
    comparison.compare
  )} chaos profit`;

  const pieces = comparison.compare.length;

  if (pieces !== 0)
    text += `, cost: ${this.costText(
      comparison.compare
    )} chaos, pieces: ${pieces}`;

  if (comparison.comment) {
    text += ` (${comparison.comment})`;
  }

  return text;
};

const updateItems = (selectedLeague, setItems) => {
  fetchItems(selectedLeague).then(items => {
    setItems(items);
  });
};

const leagueSelected = (event) => {
  // const selectedLeague = this.state.leagues[event.target.value];
  // this.setState(
  //   {
  //     selectedLeague,
  //     selectedMetaLeague: event.target.value,
  //   },
  //   () => this.updateItems()
  // );
}

const costText  = (names) => {
  const costText = cost(this.state.items, this.state.selectedLeague, names);

  if (!costText) {
    return "N/A";
  }
  return costText;
}

const compareText = (base, compare) => {
  const comparison = comparePrice(
    this.state.items,
    this.state.selectedLeague,
    base,
    compare
  );

  if (!comparison) {
    return "N/A";
  }
  return comparison;
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comparisonsByGroup: comparisons(),
//       selectedMetaLeague: "Temp SC",
//     };
//   }

//   componentDidMount() {
//     const { selectedMetaLeague } = this.state;

//     fetchLeagues().then(leagues => {
//       console.log(`Leagues: ${JSON.stringify(leagues)}`);
//       this.setState(
//         { leagues, selectedLeague: leagues[selectedMetaLeague] },
//         () => this.updateItems()
//       );
//     });
//   }

//   render() {
//     const { selectedMetaLeague, comparisonsByGroup } = this.state;

//     return (
//       <div>
//         <h1>PoE - What to flip?</h1>
//         <select
//           name="league"
//           value={selectedMetaLeague}
//           onChange={event => this.leagueSelected(event)}
//         >
//           {metaLeagues().map(league => (
//             <option key={league} value={league}>
//               {league}
//             </option>
//           ))}
//         </select>

//         <ol>
//           {Object.keys(comparisonsByGroup).map(group => (
//             <div key={group}>
//               <h2>{group}</h2>
//               {comparisonsByGroup[group].map((comparison, i) => (
//                 <li key={i}>
//                   <label>{this.comparisonText(comparison)}</label>
//                 </li>
//               ))}
//             </div>
//           ))}
//         </ol>
//       </div>
//     );
//   }

//   comparisonText(comparison) {
//     let text = `${comparison.name}: `;

//     if (
//       !this.state.selectedLeague ||
//       !this.state.items ||
//       !this.state.items[this.state.selectedLeague]
//     ) {
//       text += "?";
//       return text;
//     }

//     text += `${this.compareText(
//       comparison.base,
//       comparison.compare
//     )} chaos profit`;

//     const pieces = comparison.compare.length;

//     if (pieces !== 0)
//       text += `, cost: ${this.costText(
//         comparison.compare
//       )} chaos, pieces: ${pieces}`;

//     if (comparison.comment) {
//       text += ` (${comparison.comment})`;
//     }

//     return text;
//   }

//   updateItems() {
//     fetchItems(this.state.selectedLeague).then(items => {
//       this.setState({ items });
//     });
//   }

//   leagueSelected(event) {
//     const selectedLeague = this.state.leagues[event.target.value];
//     this.setState(
//       {
//         selectedLeague,
//         selectedMetaLeague: event.target.value,
//       },
//       () => this.updateItems()
//     );
//   }

//   costText(names) {
//     const costText = cost(this.state.items, this.state.selectedLeague, names);

//     if (!costText) {
//       return "N/A";
//     }
//     return costText;
//   }

//   compareText(base, compare) {
//     const comparison = comparePrice(
//       this.state.items,
//       this.state.selectedLeague,
//       base,
//       compare
//     );

//     if (!comparison) {
//       return "N/A";
//     }
//     return comparison;
//   }
// }

// export default App;
