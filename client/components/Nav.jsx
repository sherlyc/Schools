import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="home">
        <Link to='/'>Home</Link>  { ' ' } | 
        <Link to='/schools'>List Schools</Link>  { ' ' } |
        <Link to='/add'>Add School</Link>
    </div>
  )
}

export default Nav
