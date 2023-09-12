import React from 'react'
import './App.css'

function Welcome(props) {
  return (
    <div>
        <h1>Welcome {props.name}</h1>
        
        <h2 className='head2'>Age : {props.age}</h2>
        <h3 className='head3'>Salary: {props.salary} </h3>
    </div>
  )
}

export default Welcome