import React from 'react'
import PropTypes  from 'prop-types'

export default function Mycard(props) {
  return (
    <div className='card'>
      <h1>Welcome!</h1>
      <p>my name is {props.name}</p>
      <p>my age is {props.age}</p>
      <p>Student :{props.isStudent ? 'yes':'no'}</p>
    </div>
  )
}

Mycard.propTypes={
  name: PropTypes.string,
  age:PropTypes.number,
  isStudent:PropTypes.bool
}

Mycard.defaultProps ={
  name:"guest",
  age:0,
  isStudent:false
}