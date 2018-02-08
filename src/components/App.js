import React, {Component} from 'react'
import './App.css'
import SignalStrength from './SignalStrength'

class App extends Component {
  constructor() {
    super()
    this.state = {
      connectivity: {
        connected: false,
        signal_strength: 2,
        bearer: 'sbb'
      },
      services: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9292/api/v1/connectivity`)
      .then(result => result.json().then(connectivity => this.setState(connectivity)))
  }

  render() {
    let services = this.state.services.map(service => {
      if (!service.available) return null
      return <li key={service.name}>{service.name}</li>
    }).filter(item => item)
    if (!services.length) services = <li>None</li>
    
    return (
      <div className="App">
        <div>
          The connected state is {this.state.connected ? 'connected' : 'disconnected'}
        </div>

        <SignalStrength signal_strength={this.state.connectivity.signal_strength}/>

        <div>
          <span>Available Services</span>
          <ul>
          {services}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
