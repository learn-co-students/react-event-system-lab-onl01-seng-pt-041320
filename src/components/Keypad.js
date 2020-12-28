
// Code Keypad Component Here
import React, { Component } from 'react'


 class Keypad extends Component {

  handleInputPassword = () => console.log('Entering Password')

  render() {
    return (
      <div>
        <input type = 'password' onKeyUp ={this.handleInputPassword}   
        />
      </div>
    )
  }
}

export default Keypad;