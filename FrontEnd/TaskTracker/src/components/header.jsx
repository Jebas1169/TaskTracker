import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'

export const Header = () => {
  return (
    <div className="container">
        <Link to="/home"
        className='title'>TASK TRACKER</Link>
      <div className="ADD">
        <Link to="/addtask" className="addbtn">
          + Task
        </Link>
      </div>
    </div>
  )
}


export default Header