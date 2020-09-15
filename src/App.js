// import App from './pages/ReduxPage'
import ReactReduxPage from './pages/ReactReduxPage'
import React, { useState } from 'react'

export default function App () {
  const [num, setNum] = useState(0)

  return (
    <div>
      <ReactReduxPage num={num} />
      <button onClick={() => setNum(num + 1)}>change num {num}</button>
    </div>
  )

}

