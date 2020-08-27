import React from 'react'

export const ThemeContext = React.createContext({ themeColor: 'pink' })
export const ThemeProvider = ThemeContext.Provider;

// 消费 吃菜
export const ThemeConsumer = ThemeContext.Consumer