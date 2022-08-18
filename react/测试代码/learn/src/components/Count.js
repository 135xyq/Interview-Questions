import React, { Component } from "react";

export default class Count extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	};
    onHandleClick= ()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            if(this.state.count === 10){
                alert("10")
            }
        })
        
    };
	render() {
		return <div>
            <button style={{cursor:'pointer'}} onClick={this.onHandleClick}>{this.state.count}</button>
        </div>;
	}
}
