export function createStore (reducer, enhancer) {
  if (enhancer) {
    console.log(enhancer)
    return enhancer(createStore)(reducer)
  }
  let currentState = undefined
  let currentListeners = []
  // 获取当前的数据
  function getState () {
    return currentState
  }
  function dispatch (action) {
    currentState = reducer(currentState, action)
    // 监听函数是一个数组，那就循环
    currentListeners.map(listener => listener())
  }
  // 订阅，订阅可以多次订阅
  function subscribe (listener) {
    currentListeners.push(listener)
  }
  dispatch({ type: "@INIT/REDUX-KKB" })
  return {
    getState,
    dispatch,
    subscribe
  }
}

export function applyMiddleware (...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);
    // 给middleware参数，比如说dispath
    let dispatch = store.dispatch;
    const middleApi = {
      getState: store.getState,
      dispatch
    }
    const middlewaresChain = middlewares.map(middleware => middleware(middleApi))
    dispatch = compose(...middlewaresChain)(dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}