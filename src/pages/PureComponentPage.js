import React, { Component } from 'react'


export class PureComponentPage extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count:0
   }
 }
  setCount() {
    this.setState({
     count:100
   })
 }

  render() {
    const { count }=this.state
    return (
      <div>
        <h3>PrueComponentPage</h3>
        <button onClick={this.setCount.bind(this)}>{count}</button>
      </div>
    )
  }
}

export default PureComponentPage
