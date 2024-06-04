import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import "./Nav.css";

function Nav() {

  const [search, setSearch] = useState()

  return (
    <>
      <div className="navbar">
          <div className="icon">
            <FaTruckMoving />
          </div>
        <p>FREE shipping when shopping upto Rs.10000 </p>
      </div>
  
      <div className="main-header">
        <div className="container">
            <div className="logo">
                <img src="logo.webp" alt="logo" />
            </div>
            <div className="search-box"> 
                <input type='text' value={search} placeholder="Search Your Product" onChange={(e)=>setSearch(e.target.value)}/>
                <button>Search</button>
            </div>
            <div className="icon">
                <div className="account">
                    <div className="user-icon">
                        <AiOutlineUser/>
                    </div>
                    <p>Hello, user</p>
                </div>
                <div className="second-icon">
                  <NavLink to="/" className="link"> <AiOutlineHeart/> </NavLink>
                  <NavLink to="/cart" className="link"><BsBagCheck/></NavLink>
                </div>
            </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
            <div className="nav">
            <ul>
                <li>
                    <NavLink to="/" className="link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/product" className="link">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="link">Contact</NavLink>
                </li>
             </ul>
            </div>        
        </div>
      </div>
    </>
  );
}

export default Nav;
