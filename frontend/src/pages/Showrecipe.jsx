import React, { useEffect } from "react";
import img1 from "../assets/Images/home/cholabhatura.jpeg"
import img2 from "../assets/Images/home/samosa.webp"
import img3 from "../assets/Images/home/biryani.webp"
import img4 from "../assets/Images/home/fishcurry.jpg"
import Marquee from "react-fast-marquee";
import icon4 from "../assets/Images/icons/breakfast.png";
import icon6 from "../assets/Images/icons/restaurent.png/";
import icon7 from "../assets/Images/icons/chineses recipie.png/";
import icon8 from "../assets/Images/icons/healthy.jpg/";
import icon9 from "../assets/Images/icons/common.png/";
import icon10 from "../assets/Images/icons/beverages.png";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShowRecipe = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/recipe/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="">
      <div className="text-center fw-bold d-block display-5 mb-5 my-3">
        😋 {userData.title} 😋
      </div>
      <div className="d-flex justify-content-between">
        <div className="col-6 card mb-3 ">
          <img
            src={"http://localhost:5000/" + userData.image}
            alt=""
            className="card-img-top img-fluid short"
            style={{ objectFit: "cover", height: 400 }}
          />
        </div>

        <div className=" col-6 card mb-3">
          <div className="p-4">
            <h4 className="display-7 fw-bold text-center mb-3 ">
              👉 {userData.title} - {userData.category} 👈
            </h4>

            <div className="card-details p-4">
              <div className="justify-content-around">
                <p>
                  <span className="fw-bold fs-5 ">Ingredients :</span>
                  <span className="mx-3">{userData.ingredients}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-2">
          <span className="fw-bold fs-2">
            <u>How to Make {userData.title}</u>
          </span>
        </div>

        <div className="p-4 ">
          <p>
            <span className="fw-bold fs-4 mb-2">Process :</span>
            <span className="mx-3">{userData.method}</span>
          </p>
        </div>
      </div>
      <hr/>
      <section className='mind p-5 mb-2'>
    <div className='container-xxl'>
    <div className="text-center mb-5"><h1>Find Some More Recipes</h1></div>
      <div className='row'>
        <div className='d-flex'>
          <div className='col-3'>
            <div className=''>
              <div className='card-img img-fluid p-3'>
                <img src={img1} className='mx-3'/>
              </div>
              
              <div className='card-title text-center'>
                  <h4>Chola Bhatura Recipe</h4>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className=''>
              <div className='card-img img-fluid p-3'>
                <img src={img2} className='mx-3'/>
              </div>
              
              <div className='card-title text-center'>
                  <h4>Samosa Recipe</h4>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className=''>
              <div className='card-img img-fluid p-3'>
                <img src={img3} className='mx-3'/>
              </div>
              
              <div className='card-title text-center'>
                  <h4>Chicken Biryani Recipe</h4>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className=''>
              <div className='card-img img-fluid p-3'>
                <img src={img4} className='mx-3'/>
              </div>
              
              <div className='card-title text-center'>
                  <h4>Fish Curry Recipe</h4>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
<hr/>
  <section className="marquee p-3 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Marquee className="p-2 slide">
                <div className="card mx-3">
                
                  <img src={icon10} alt="" className="img-fluid" />
                  <p className="card-text">Beverages recipes</p>
                  
                </div>
                <div className="card mx-3">
                  <img src={icon8} alt="" className="img-fluid" />
                  <p className="card-text">Healthy food Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon6} alt="" className="img-fluid" />
                  <p className="card-text">Restaurent Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon9} alt="" className="img-fluid" />
                  <p className="card-text">Common Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon7} alt="" className="img-fluid" />
                  <p className="card-text">Chinese Recipies</p>
                </div>
                <div className="card mx-3">
                  <img src={icon4} alt="" className="img-fluid" />
                  <p className="card-text">Breakfast Recipies</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowRecipe;
