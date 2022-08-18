import React, { Component } from 'react'

export default class TestB extends Component {
  render() {
    return (
      <div>
        <p>这是组件TestB {this.props.number}</p>
      </div>
    )
  }
}
