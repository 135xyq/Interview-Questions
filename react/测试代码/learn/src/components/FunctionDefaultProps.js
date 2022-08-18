import React from 'react'

export default function FunctionDefaultProps(props) {
  return (
    <div>
        <p>姓名:{props.name}</p>
        <p>年龄：{props.age}</p>
    </div>
  )
}

FunctionDefaultProps.defaultProps = {
    name:"xyq",
    age:20
}
