import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown.js'
import {FaCartPlus} from 'react-icons/fa'


const Navbar = (props) => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [searchInput, setSearchInput] = useState('');
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const updateSearchFilter = (e) => {
    setSearchInput(e.target.value)
    setFilter(searchInput)
    // setSearchFilter(e.target.value)
  }
  const {setIsLoggedIn,setUsername,setPassword,setCartItems,setCartTotal,cartItems,cartTotal,setFilter}=props;
  const handleLogout = () => {
    // Clear the token from local storage and mark user as logged out
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    // Check if a token exists in local storage
     // Check if cartItems and cartTotal exist in local storage
     const storedCartItems = localStorage.getItem('cartItems');
     const storedCartTotal = localStorage.getItem('cartTotal');
 
     setCartItems(Number(storedCartItems));
     setCartTotal(Number(storedCartTotal));
   
  }, []);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          BWI
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </li>
          <li>
          <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={updateSearchFilter}
          />
          <button onClick={() => console.log('Search:', searchInput)}>Search</button>
        </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
            >
              <FaCartPlus/>
              <span>{"   "}Items : {cartItems}</span>
              <span>{"   "}Total : {cartTotal}</span>
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  )
}

export default Navbar