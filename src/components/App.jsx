import React, {Component} from 'react';
import Firebase from 'firebase';
import Reactfire from 'reactfire';
import {map} from 'lodash'
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      players: null
    };
  }
  componentWillMount() {
    const ref = new Firebase('https://fluffy-pancakes.firebaseIO.com/');
    ref.once('value', (data) => {
      this.setState({players: data.val()});
      console.log(this.state.players);
    });
  }
  appendPlayers() {
    console.log(this.state.players);
    return map(this.state.players, player => {
      return <div key={player.id}>{player.player_name}</div>
    })
  }
  render() {
    if (!this.state.players) {
      return <div>loading</div>
    } else {
      return (
        <div>
          {this.appendPlayers()}
        </div>
      )
    }
    // const ifFirebaseIsDoneLoading = !this.state.players ? this.appendPlayers() : '';

  }
}
export default App;
