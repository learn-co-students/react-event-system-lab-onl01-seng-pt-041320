import React, { Component } from 'react';

export default class Keypad extends Component {

    entering = () => {
        console.log('Entering password...');
      }
 
    render() {
      return (
        <div>
            <input onKeyUp={() => {
                console.log('Entering password...')
                }} type="password" 
            /> 
        </div>
      )
    }
}