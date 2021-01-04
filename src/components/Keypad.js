import React from 'react';

class Keypad extends React.Component {

  handleTyping = () => console.log('Entering password...')

  render() {
    return (
      <input onKeyUp={this.handleTyping} type="password" />
    )
  }
}
export default Keypad;