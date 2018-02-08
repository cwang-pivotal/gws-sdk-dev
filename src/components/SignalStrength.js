import React, {Component} from 'react'
import './SignalStrength.css'

class SignalStrength extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <ul className="signal-strength">
        <li className="very-weak"><div className={this.state.signal_strength > 0 ? 'present' : 'absent'}></div></li>
        <li className="weak"><div className={this.state.signal_strength > 1 ? 'present' : 'absent'}></div></li>
        <li className="moderate"><div className={this.state.signal_strength > 2 ? 'present' : 'absent'}></div></li>
        <li className="strong"><div className={this.state.signal_strength > 3 ? 'present' : 'absent'}></div></li>
        <li className="very-strong"><div className={this.state.signal_strength > 4 ? 'present' : 'absent'}></div></li>
      </ul>
    )
  }
}

export default SignalStrength