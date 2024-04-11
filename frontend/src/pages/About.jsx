import React from "react";
import img1 from "../assets/Images/About/a6.jpg";
import { Link } from "react-router-dom";
import video from "../assets/Images/About/1.mp4";
import blog from "../assets/Images/blog/blog-1.jpg";
import blog1 from "../assets/Images/blog/blog-2.jpg";
import blog2 from "../assets/Images/blog/blog-3.jpg";
import blog3 from "../assets/Images/blog/blog-6.jpg";
import blog4 from "../assets/Images/blog/blog-4.jpg";
import Marquee from "react-fast-marquee";
import icon from "../assets/Images/icons/icon1.png";
import icon1 from "../assets/Images/icons/icon2.png";
import icon2 from "../assets/Images/icons/icon3.png";
import icon3 from "../assets/Images/icons/icon4.png";
import icon4 from "../assets/Images/icons/breakfast.png";
import icon5 from "../assets/Images/icons/icon6.png";
import icon6 from "../assets/Images/icons/restaurent.png/";
import icon7 from "../assets/Images/icons/chineses recipie.png/";
import icon8 from "../assets/Images/icons/healthy.jpg/";
import icon9 from "../assets/Images/icons/common.png/";
import icon10 from "../assets/Images/icons/beverages.png";

import img2 from "../assets/Images/About/foodbout.jpg";

const About = () => {
  return (
    <div>
      <section className="about-wrapper p-5 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-white">#Know Us</h1>
              <h6 className="text-white">Take a moment to know us better...</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="know-us p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex">
              <div className="col-6">
                <img src={img2} className="img-fluid p-4" />
              </div>

              <div className="col-6 d-flex flex-column text-center justify-content-center align-items-center p-4">
                <div className="mb-3">
                  <h1>Who are we?</h1>
                </div>
                <div className="mb-3">
                  <p>
                    We are glad that you are here and thank you for stopping by
                    on Ballian's Recipes – a blog which has different types of
                    recipes, mostly Indian but some World Cuisine as well. There
                    are many Eggless Baking Recipes as well. Most of the recipes
                    are in step by step pictorial guide. They are easy to
                    understand and relate too. Some recipes have short videos
                    with the stepwise photo guide.
                  </p>
                </div>
                <div>
                  <Link className="fs-3 " to={"/contact"}>
                    contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download p-3">
        <div className="container-xxl">
          <div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-4">
                <h2 className="text-center">
                  Download our{" "}
                  <Link className="fs-4">
                    <b>App</b>
                  </Link>
                </h2>
              </div>

              <div className="col-6 mb-3">
                <video loop autoPlay src={video}></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-5">
              <h1>What our Customer Say</h1>
              <h6>Get To know what our trusted customers say</h6>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3 ">
                <div className=" d-flex">
                  <div className="customer-img col-5 p-3 ">
                    <img src={blog} className="img-fluid card-img-top" />
                  </div>

                  <div className="card-body col-7 p-4 ">
                    <span>
                      <b>Arthur</b>
                    </span>

                    <p className="my-3">
                      “I would give The Ballian's Recipe 5 stars, because it is
                      a great source of inspiration and information for anyone
                      who loves cooking and eating. The site has a high quality
                      and variety of recipes and content, that cater to
                      different tastes, skill levels, and occasions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3  ">
                <div className="p-3 d-flex">
                  <div className=" customer-img col-5  ">
                    <img src={blog1} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Marvel Clein</b>
                    </span>

                    <p className="my-3">
                      The Ballians is a Great food website that offers a variety
                      of recipes, tips, and reviews for anyone who loves cooking
                      and eating. Whether you are a beginner or a master chef,
                      you will find something to inspire and delight you on this
                      site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3  ">
                <div className="p-3 d-flex">
                  <div className="customer-img col-5  ">
                    <img src={blog2} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b> Sophia</b>
                    </span>

                    <p className="my-3">
                      The Ballian's Recipe has a simple and elegant design, with
                      a white background and colorful photos. The site is easy
                      to navigate, with a menu bar that lets you browse by
                      category, such as breakfast, dinner, baking, drinks, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3 ">
                <div className="p-3 d-flex">
                  <div className=" customer-img col-5  ">
                    <img src={blog3} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Rachna Vishwakarma</b>
                    </span>

                    <p className="my-3">
                      LOVE ur website….I am always looking for easy veg recipes
                      and ur website is just fantastic! Thanks for putting up
                      step by step pics and the easy viewing format… Thanks
                      again for posting such great recipes!!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card  blog-details mb-3 ">
                <div className="p-3 d-flex">
                  <div className=" customer-img col-5  ">
                    <img src={blog1} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b>Olivia</b>
                    </span>

                    <p className="my-3">
                      Hi Ballians Recipe, thanks to u i can able to make any veg
                      recipe with yum…taste in it….thx a lot fr making this blog
                      with easy cooking n step by step illustrations , can
                      easily understood by any one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 p-2">
              <div className="card blog-details mb-3 ">
                <div className="p-3 d-flex">
                  <div className="customer-img col-5  ">
                    <img src={blog4} className="img-fluid img-rounded-start" />
                  </div>

                  <div className="card-body col-7 ">
                    <span>
                      <b> Alisha</b>
                    </span>

                    <p className="my-3">
                      i hv been following your recipes since a few months..and i
                      must tell u that i feel really happy when they turn out
                      well..the detailed images help us to understand the
                      textures 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee p-5">
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

export default About;
