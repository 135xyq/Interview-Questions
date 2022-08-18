import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PropType extends Component {
	static propTypes = {
        a:PropTypes.string.isRequired,
        b:PropTypes.number,
        c:PropTypes.bool
    };
	render() {
		return <div>
            <p>a: {this.props.a}</p>
            <p>b: {this.props.b}</p>
            <p>c: {this.props.c}</p>
        </div>;
	}
}
