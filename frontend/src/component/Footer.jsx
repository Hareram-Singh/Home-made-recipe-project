import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import google from "../assets/Images/pay/play.jpg";
import app from "../assets/Images/pay/app.jpg";
import pay from "../assets/Images/pay/pay.png";

const Footer = () => {
  return (
    <div>
    <footer className="footer p-5 ">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 d-flex">
          <div className="col-8 text-center mb-3">
            <h3>Sign Up for a News-Letter</h3>
            <p>
              Get email updates on all our <Link>special offers</Link>
            </p>
          </div>
          <div className="col-4">
            <div className="input-group mb-3 d-flex mt-2">
              <input
                type="email"
                className="form-control p-2"
                placeholder="enter email here..."
                aria-label="Find products ..."
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" id="basicaddon2">
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr className="m-3" />
        <div className="col-4  flex-coloumn ">
          <h3 className="mb-4">Contact us</h3>
          <div className="footer-details">
            <p className="mb-3">
              <b>Address:</b> Parmeshwar Enclave, Near indira nagar Police
              Station, Lucknow, UttarPradesh
            </p>
            <p className="mb-3">
              <b>Phone:</b>{" "}
              <a href="tel:+919140735665"> Call us +919140735665 </a>
            </p>
            <p className="mb-5">
              <b>Hours Open:</b> 24x7 Available
            </p>
            <p className="mb-3">
              <b>Follow us</b>
            </p>
            <div className="col-5 social-icons mb-3 d-flex justify-content-around">
              <Link to={'https://twitter.com/?lang=en-in'}>
                <FaSquareXTwitter className="fs-5" />
              </Link>
              <Link to={'https://www.facebook.com/'}>
                <BsFacebook className="fs-5" />
              </Link>
              <Link to={'https://www.instagram.com/?hl=en'}>
                <BsInstagram className="fs-5" />
              </Link>
              <Link to={'https://web.whatsapp.com/'}>
                <BsWhatsapp className="fs-5" />
              </Link>
              <Link to={'https://www.linkedin.com/login'}>
                <BsLinkedin className="fs-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2">
          <h3 className="mb-4">About</h3>
          <div className="footer-details d-flex flex-column">
            <Link to={'/about'} className="mb-3">About Us</Link>
            <Link to={'/ourmenu'} className="mb-3">Recipes</Link>
            <Link className="mb-3">Privacy Policy</Link>
            <Link className="mb-3">Terms & Conditions</Link>
            <Link className="mb-3">Fee Policy</Link>
          </div>
        </div>
        <div className="col-2">
          <h3 className="mb-4">Account</h3>
          <div className="footer-details d-flex flex-column">
            <Link to={'login'} className="mb-3">Profile</Link>
            
            <Link to={'contact'} className="mb-3">Help</Link>
            <Link to={'/'} className="mb-3">Payments</Link>
            <Link to={'cart'} className="mb-3">My Wishlist</Link>
            <Link to={'addrecipe'} className="mb-3">Add Your recipes</Link>
          </div>
        </div>
        <div className="col-4">
          <h3 className="mb-3">Install App</h3>
          <div className="footer-details">
            <p>Available On Google Play Services & App Store</p>

            <div className="pay d-flex">
              <Link>
                <img
                  src={google}
                  alt="play store"
                  className="img-fluid p-2 my-3"
                ></img>
              </Link>
              <Link>
                <img
                  src={app}
                  alt="app store"
                  className="img-fluid p-2 my-3"
                ></img>
              </Link>
            </div>
            <p className="mb-3">Payments Method</p>
            <Link to={'/'} className="pay">
              <img
                src={pay}
                alt="play store"
                className="img-fluid px-4"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="row d-flex justify-content-between">
        <div className="col-6">
          <p>&copy; Developed by Singh Developer 2023 </p>
        </div>
        <div className="col-4 d-flex justify-content-around">
          <Link className="text-black">Privacy Policy</Link>
          <Link className="text-black">Terms Of Use</Link>
          <Link to={'/'} className="text-black">Contact us</Link>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
