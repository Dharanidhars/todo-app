import React from 'react'
import './Footer.css'

const Footer = ({length}) => {
    const year = new Date()
  return (
    <div className='footer'>
        <p>{length} List {length === 1 ? "Item" : "Items"} </p>
        <p>Copyright &copy; { year.getFullYear() } </p>
    </div>
  )
}

export default Footer