import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <section className="contact-wrapper ">
        <div className="container-xxl">
          <div className="row">
          <div className="text-center mb-3">
          <h1>#Reach Out To us</h1>
          <h6 className="text-white">We are Only a step away from you</h6>
        </div>
          </div>
        </div>
      </section>

      <section className="contact-info p-5 m-3">
        <div className="container-xxl">
          <div className="row">
            <div className="  d-flex align-items-center justify-content-between ">
              <div className="col-6 d-flex align-items-center">
                <map name="">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3558.10310535348!2d80.99898810000002!3d26.900222700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699122814159!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </map>
              </div>

              <div className="contact-details col-6">
                <div className="text-start mb-2">
                  <h2>Contact Information</h2>
                </div>

                <div className="footer-details">
                  <p className="mb-3">
                    <b>Address:</b> Parmeshwar Enclave, Near indira nagar Police
                    Station, Lucknow, UttarPradesh
                  </p>
                  <p className="mb-3">
                    <b>Phone:</b>{" "}
                    <a href="tel:+919140735665"> Call us +919140735665 </a>
                  </p>
                  <p className="mb-3">
                    <b>Hours Open:</b> 24x7 Available
                  </p>

                  <p className="mb-3">
                    <b>Follow us</b>
                  </p>
                  <div className="col-3 social-icons mb-3 d-flex justify-content-around">
                    <Link>
                      <FaSquareXTwitter className="fs-5" />
                    </Link>
                    <Link>
                      <BsFacebook className="fs-5" />
                    </Link>
                    <Link>
                      <BsInstagram className="fs-5" />
                    </Link>
                    <Link>
                      <BsWhatsapp className="fs-5" />
                    </Link>
                    <Link>
                      <BsLinkedin className="fs-5" />
                    </Link>
                  </div>

                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen
                    book. It usually begins with:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="card col-8 p-5">
                <div className="text-center mb-3">
                  <h2>Send Us A Message</h2>
                </div>
                <div className="col-12 d-flex mb-3">
                  <div className="col-6 p-2">
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter First Name"
                      aria-label="Enter-First-Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>

                  <div className="col-6 p-2">
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Enter Last Name"
                      aria-label="Enter-Last-Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>

                <div className="p-2 mb-3">
                  <label className="p-2">Enter Your Email Address</label>
                  <input
                      type="email"
                      className="form-control p-2"
                      placeholder="Enter Your Email"
                      aria-label="Enter-Your-Email"
                      aria-describedby="basic-addon2"
                    />
                </div>

                <div className="p-2 mb-3">
                  <label className="p-2">Give your feedback</label>
                  <textarea className="form-control"  rows='3' ></textarea>
                </div>

                <button className="p-3" type="submit">Submit</button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
