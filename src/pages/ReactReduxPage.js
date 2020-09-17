import React, { Component } from 'react'

// import { connect } from 'react-redux'
import { connect } from './kReactRedux'
// connect 连接store 与组件 其实这里返回的是一个新组件 hoc


class ReactReduxPage extends Component {
  render () {
    const { count, dispatch, add, minus } = this.props
    console.log(add)
    console.log(count)
    return (

      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: 'ADD' })}> add use dispatch</button>
        <button onClick={add}> add</button>
        <button onClick={minus}> minus</button>
      </div>
    )
  }
}

// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // ownProps 组件本身的props ,谨慎使用，如果发生变化,mapStateToProps会被重新执行
  console.log("ownProps", ownProps)
  return state => ({ count: state })
}
// 如果不指定mapDispatchToProps,默认props会被注入dispatch本身
// object,dispatch 本身不会被注入props
const mapDispatchToProps = (dispatch) => {
  console.log(33)
  return {
    dispatch,
    add: () => dispatch({ type: "ADD" }),
    minus: () => dispatch({ type: "MINUS" })
  }
}
export default connect(state => ({ count: state }), mapDispatchToProps)(
  ReactReduxPage
)


