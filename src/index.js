import React from 'react'
import ReactDOM from 'react-dom'

//引入全局样式
import './assets/styles/core.less'
import 'normalize.css'
import App from './App'
import { Provider } from "react-redux"
// import { Provider } from './pages/kReactRedux'
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)