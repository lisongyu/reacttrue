import React, { useState,useEffect } from 'react'

function HookPage(){
  // 定义一个count的state变量，初始化为0
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('effect')
    // 只需要在count发生改变的时候执行就可以啦
    document.title=`点击了${count}次`
  
  },[count]);





    return (
      <div>
        <h3>Hookpage</h3>
        <p>{count}</p>
        <button onClick={()=> setCount(count+1)}>add</button>
        <p>{useClock().toLocaleTimeString()}</p>
      </div>
    )
  }
 
  // 自定义一个hook 命名要以use开头
  function useClock(){
   
    const [date,setDate] =  useState(new Date())
    useEffect(() => {
      // 只需要在didMount时候执行就可以了
      const timer = setInterval(()=>{
        setDate(new Date())
      },1000)
    return ()=>clearInterval(timer)
    },[]);
  return date

  }
export default HookPage
