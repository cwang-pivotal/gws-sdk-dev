import React, {Component} from 'react'
import './App.css'
import SignalStrength from './SignalStrength'

class App extends Component {
  constructor() {
    super()
    this.state = {
      connectivity: {
        connected: false
      },
      services: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9292/api/v1/connectivity`)
      .then(result => result.json().then(connectivity => {this.setState({connectivity})}))
  }

  render() {
    return (
      <div className="App">
        <div className="logo"><div>MY<br/>Co</div></div>
        <h2>Connect to Your Aircraft's Wireless Network</h2>
        <ul>
          <li>Internet: <div className={'connectivity_status ' + (this.state.connectivity.connected ? 'available' : '')}>{this.state.connectivity.connected ? 'Available' : 'Unavailable'}</div></li>
          {this.state.connectivity.connected && <li>Bearer: <div className="connectivity_bearer">{this.state.connectivity.bearer}</div></li>}
          {this.state.connectivity.connected && <li>Signal Strength: <SignalStrength signal_strength={this.state.connectivity.signal_strength}/></li>}
        </ul>
        {this.state.connectivity.connected && <button>Connect</button>}
      </div>
    )
  }
}

export default App
