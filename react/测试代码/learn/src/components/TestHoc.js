import React, { Component } from "react";

export default function WithHocTest(Comp) {
	return class TestHoc extends Component {
		render() {
			return (
				<>
					<Comp {...this.props}></Comp>
				</>
			);
		}
	};
}
