import React from 'react'
import logo from "../assets/img/logo.png"
import search from "../assets/img/search.png"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-content'>
            <Link to={"bestsellers"}>
                <img src={logo} alt="" />
            </Link>
            <div className='search'>
                <img src={search} alt="" />
                <input type="text" placeholder='Поиск' />
            </div>
            <div className='navbar-icons'>
                <span><i className="bi bi-heart"></i></span>
                <span><i className="bi bi-bag"></i></span>
                <span><i className="bi bi-person"></i></span>
            </div>
        </div>
      </div>
    </div>
  )
}
