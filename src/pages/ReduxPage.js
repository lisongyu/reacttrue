import React, { Component } from 'react'
import store from '../store'
export default class ReduxPage extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      console.log('state发生改变了')
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={()=>store.dispatch({type:'ADD'})}>Add</button>
      </div>
    )
  }
}
