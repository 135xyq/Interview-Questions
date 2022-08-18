import React ,{useState} from 'react'

export default function StateHook() {
    const [count,setCount] = useState(0)
    function add(){
        setCount(count+1)
        setCount(count=>count+1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={add}>加一</button>
    </div>
  )
}
