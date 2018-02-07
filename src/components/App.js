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
      services: [
        {
          name: 'E-Magazines',
          available: false
        },
        {
          name: 'Gogo Text and Talk',
          available: true
        },
        {
          name: 'Gogo Vision',
          available: true
        }
      ]
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9292/api/v1/connectivity`)
      .then(result => result.json().then(connectivity => this.setState(connectivity)))
  }

  render() {
    const services = this.state.services.map(service => {
      if (!service.available) return null
      return <li>{service.name}</li>
    });
    
    return (
      <div className="App">
        <div>
          The connected state is {this.state.connected ? 'connected' : 'disconnected'}
        </div>

        <SignalStrength signal_strength={this.state.connectivity.signal_strength}/>

        <div>
          Available Services:
          <ul>
          {services}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
