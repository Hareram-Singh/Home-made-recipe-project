import React, {useState} from "react";
import { IoHeart } from "react-icons/io5";
import { CiMemoPad } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link,useLocation } from "react-router-dom";
import logo from "../assets/Images/logo1.png"
import { useEffect } from "react";

const Header = () => {

  return (
    <header className="header-upper px-3 sticky-top">
      <div className="container-xxl">
        <div className="row">
          <div className="col-2 m-auto text-center ">
            <Link to="/">
              <img src={logo} alt="logo" className="img-fluid logo" />
            </Link>
          </div>

         

          <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto ">
            <Link to={"/"} >Home</Link>
            <Link to={"ourmenu"}>Recipes</Link>
            
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </div>

          <div className="col-3 d-flex align-items-center mt-2">
          <div className="input-group mb-3 d-flex mt-2">
            <span className="input-group-text basic-addon1">All</span>
            <input
              type="text"
              className="form-control p-2 "
              placeholder="Search recipes ..."
              aria-label="Find products ..."
              aria-describedby="basic-addon2"
              
            />
            <button  className="input-group-text" id="basicaddon2">
              Search
            </button>
          </div>
        </div>

          <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
            <Link to={"cart"}>
              <div className="d-flex">
                <span>
                  <IoHeart className="fs-3 mx-2" />
                </span>
                <p>Wishlist</p>
              </div>
            </Link>
            <Link to={"login"}>
              <div className="d-flex">
                <span>
                  <RiAccountCircleFill className="fs-3 mx-2" />
                </span>
                <p>Account</p>
              </div>
            </Link>
            <Link to={"order"}>
              <div className="d-flex">
                <span>
                  <CiMemoPad className="fs-3 mx-2" />
                </span>
                <p>Orders</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
  
}

export default Header;
