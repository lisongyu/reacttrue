import React, { Component } from 'react'
import {ThemeContext} from "./ThemeContext"
export default class ContextTypePage extends Component {

  static contextType = ThemeContext
  render () {
    const {themeColor} = this.context
    console.log("this",this)
    return (
      <div className="border">
        <h3 className={themeColor}>我是子页面</h3>
      </div>
    )
  }
}
