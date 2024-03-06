import React from 'react'
import './Body.css'
import Menu from '../Menu/Menu.jsx'
import Invoice from '../Invoice/Invoice.jsx'

const Body = () => {
  return (
    <div className='body'>
        <Menu/>
        <Invoice/>
    </div>
  )
}

export default Body