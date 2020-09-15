import { createStore, applyMiddleware } from 'redux'
// import { createStore, applyMiddleware } from './kRedux'
// 定义state初始化
import thunk from "redux-thunk"
import logger from "redux-logger"
function counterReducer (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state
  }
}
const store = createStore(counterReducer, applyMiddleware(logger, thunk))

export default store;

// function logger () {
//   return dispatch => action => {
//     console.log(action.type + "执行了")
//     return dispatch(action)
//   }
// }

// function thunk ({ getState, dispatch }) {
//   return dispatch => action => {
//     // action 可以是对象也可以是函数，不同的形式，操作也不通
//     if (typeof action === "function") {
//       return action(dispatch, getState)
//     } else {
//       return dispatch(action)
//     }
//   }
// }