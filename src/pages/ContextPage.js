import React, { Component } from 'react'

import ContextTypePage from './ContextTypePage'

import ConsumerPage from './ConsumerPage'
import { ThemeProvider } from './ThemeContext'

// 使用context 步骤
// 1、 创建 createContext
// 2、Proiver 接收value,以保证有传下去的数据
// 3、接收 Consumer或者class.contextType
export default class ContextPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: {
        themeColor: "red"
      }
    }
  }


  render () {
    const { theme } = this.state
    return (
      <div>
        <h3>ContextPage</h3>
        <ThemeProvider value={theme}>
          <ContextTypePage />
          <ConsumerPage />
        </ThemeProvider>
      </div>
    )
  }
}
