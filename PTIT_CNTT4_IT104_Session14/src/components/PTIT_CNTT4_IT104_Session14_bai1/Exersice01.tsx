import React, { Component } from 'react'

export default class Exersice01 extends Component {
    constructor(props: {}) {
      super(props);
      this.state = {
        userName: 'Nguyen Quoc Hung'
      }
    }
  render() {
    return (
      <div>
        <h2>{this.state.userName}</h2>
      </div>
    )
  }
}