import React, { Component } from 'react'
import './App.css'
import ImageComponent from './ImageComponent'
import InfoComponent from './InfoComponent'
import { fullName } from '../config/constants'

class App extends Component {
  render () {
    return (
      <div className='main-wrapper'>
        <ImageComponent />
        <InfoComponent fullName={fullName} />
      </div>
    )
  }
}

export default App
