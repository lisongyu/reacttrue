import React, { Component } from 'react'
import "../assets/styles/core.less"
//HOC: 是个函数，接收一个组件，返回一个新组件
// function Child(props){
//   return <div>Child</div>
// }

// Com这里是function或者class组件

const foo=Cmp=> props=>{
  return (
    <div className="border">
      <Cmp {...props}/>
    </div>
  )
}

@foo
@foo
class Child extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  
  }
  render(){
    return (
      <div>
        children
      </div>
    )
  }
  
}

// const Foo = foo(foo(Child));
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Child />
      </div>
    )
  }
}
