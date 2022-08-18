import React, { Component } from "react";

export default class TestRef extends Component {
    inputRef1 = React.createRef();
    getInput = e=>{
        this.inputRef2 = e;
    }
    onHandleInput1 = (ref)=>{
        // console.log(ref)
        alert(ref.current.value)
    }
    onHandleInput2 = ()=>{
        console.log(this.inputRef2.value)
        // alert(ref.value)
    }
	render() {
		return (
			<div>
                {/* <p>输入框内容：{this.inputRef1.current.value}</p> */}
                <p>
                <input type="text" ref={this.inputRef1}/>
                <button onClick={this.onHandleInput1.bind(this,this.inputRef1)}>获取输入内容</button>
                </p>
                <p>
                <input type="text" ref={this.getInput}/>
                <button onClick={this.onHandleInput2}>获取输入内容</button>
                </p>
			</div>
		);
	}
}
