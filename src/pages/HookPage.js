import React, { useState,useEffect } from 'react'

function HookPage(){
  // 定义一个count的state变量，初始化为0
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title=`点击了${count}次`
  })

    return (
      <div>
        <h3>Hookpage</h3>
        <p>{count}</p>
        <button onClick={()=> setCount(count+1)}>add</button>
      </div>
    )
  }


export default HookPage
