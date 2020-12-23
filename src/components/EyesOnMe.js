// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    
    handleOnBlur() {
        console.log('Hey! Eyes on me!')
    }

    handleOnFocus() {
        console.log('Good!')
    }

    render() {

       return <button
       onBlur={this.handleOnBlur}
       onFocus={this.handleOnFocus}
       ></button>
    }
}
export default EyesOnMe