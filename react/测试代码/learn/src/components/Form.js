import React, { Component } from "react";

export default class Form extends Component {
	state = {
		userName: "",
	};
    onHandleInputUserName(e){
        let result = e.target.value;
        this.setState({
            userName:result
        })
    }
	render() {
		return (
			<div>
				<p>{this.state.userName}</p>
				<input
					type="text"
					value={this.state.userName}
					onChange={this.onHandleInputUserName.bind(this)}
				/>
			</div>
		);
	}
}
