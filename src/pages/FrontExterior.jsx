import React from 'react'
import Gallery from './Gallery'
import img from "../assets/log.jpg"
import back from '../assets/back.jpg'


function FrontExterior() {
  return (
    <div>
      <Gallery/>
      <div>
        <img src={img}/>
        <img src={back} />
      </div>
    </div>
  )
}

export default FrontExterior