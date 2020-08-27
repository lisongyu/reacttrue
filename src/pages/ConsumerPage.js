import React, { useState, useEffect } from 'react'
import { ThemeConsumer } from "./ThemeContext"
function ConsumerPage () {
  return (
    <div>
      <h3>Consumer</h3>
      <ThemeConsumer>{ctx => <div className={ctx.themeColor}>文本</div>}</ThemeConsumer>
    </div>
  )
}

export default ConsumerPage
