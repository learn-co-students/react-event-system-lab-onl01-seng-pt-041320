import React from 'react'

export default class EyesOnMe extends React.Component {

  handleBLur = () => {
    console.log('Hey! Eyes on me!')
  }

  handleFocus = () => {
    console.log('Good!')
  }

  render() {
    return(
      <button onFocus={this.handleFocus} onBlur={this.handleBLur} />
    )
  }
}
