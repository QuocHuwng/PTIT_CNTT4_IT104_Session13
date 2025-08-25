import React, { Component } from 'react'
import "./Button.css"
export default class Button extends Component {
  render() {
    return (
      <div>
            <button className='btn primary'>primary</button>
            <button className='btn secondary'>secondary</button>
            <button className='btn success'>success</button>
            <button className='btn warning'>warning</button>
            <button className='btn danger'>danger</button>
            <button className='btn info'>info</button>
            <button className='btn light'>light</button>
            <button className='btn dark'>dark</button>
            <button className='btn link'>link</button>

      </div>
    )
  }
}
