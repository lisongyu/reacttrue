import React, { Component } from 'react'


export default class Layout extends Component {
  render() {
    const {children,showTopBar,showBottomBar} =this.props
    return (
      <div>
        {showTopBar&&<p>头部</p>}
        <h3>{children}</h3>
        {showBottomBar&&<p>底部部</p>}
       
      </div>
    )
  }
}
