import React from 'react'
import './image.css'

function Image(props) {
  return (
    <div>
        <img src={props.link} alt="Not Available" height={props.height} className='image1' />
    </div>
  )
}

export default Image