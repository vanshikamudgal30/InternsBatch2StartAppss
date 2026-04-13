import React from 'react'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/' className={({isActive}) => isActive ? "active-link":""}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive})=> isActive ? "active-link":""}>About</NavLink>
        </li>
        <li>
            <NavLink to='/blog' className={({isActive})=>isActive ? "active-link":""}>Blogs</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
