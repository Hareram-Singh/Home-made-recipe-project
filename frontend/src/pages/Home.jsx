import React from 'react'
import img1 from "../assets/Images/home/cholabhatura.jpeg"
import img2 from "../assets/Images/home/samosa.webp"
import img3 from "../assets/Images/home/biryani.webp"
import img4 from "../assets/Images/home/fishcurry.jpg"
import img5 from "../assets/Images/home/breakfast2.jpeg"
import img6 from "../assets/Images/home/lunch.jpg"
import img7 from "../assets/Images/home/snacks1.jpg"
import img8 from "../assets/Images/home/dinner1.png"
import img9 from "../assets/Images/home/desert.jpeg"
import img10 from "../assets/Images/home/Starter.jpg"
import trend from "../assets/Images/home/trendy1.webp"
import trend1 from "../assets/Images/home/trendy2.webp"
import trend2 from "../assets/Images/home/trendy3.webp"
import trend3 from "../assets/Images/home/trendy4.webp"
import street from "../assets/Images/home/street1.jpg"
import street1 from "../assets/Images/home/street2.jpg"
import street2 from "../assets/Images/home/street3.jpg"
import street3 from "../assets/Images/home/street4.webp"
import street4 from "../assets/Images/home/street5.webp"
import street5 from "../assets/Images/home/street6.jpg"
import street6 from "../assets/Images/home/street7.jpg"
import street7 from "../assets/Images/home/street8.jpg"



const Home = () => {
  return (
    <div>

    <section className="home-wrapper p-5 mb-5">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center my-5">
          <h1 className="text-white ">Authentic Indian Recipes For The Modern Kitchen</h1>
          <h5 className="text-white">"A recipe is a story that ends with a good meal."</h5>
        </div>
      </div>
    </div>
  </section>

      <h1 className='text-center text-black'>What's in your mind?</h1>

  <section className='mind p-5 mb-3'>
    <div className='container-xxl'>
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

      <h1 className='text-center text-black'>Trendy Dishes Recipes</h1>
    
      <section className='trendy-dish mb-3 p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='d-flex'>
              <div className='col-3  p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={trend} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Rajma Masala </h4>
                  </div>
                </div>
              </div>

              <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={trend1} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Veg Biryani </h4>
                  </div>
                </div>
              </div>

              <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={trend2} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Chicken Korma </h4>
                  </div>
                </div>
              </div>

              <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={trend3} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Paneer Butter Masala </h4>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <hr></hr>

      <h1 className='text-center text-black'>Explore To Find</h1>

      <section className='explore p-5 mb-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='d-flex'>
              <div className='col-2 p-2'>
                <div>
                <div className='card-img'>
                <img src={img5} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4> Breakfast</h4>
              </div>
                </div>
              </div>

              <div className='col-2 p-2'>
                <div>
                <div className='card-img'>
                <img src={img6} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4> Lunch</h4>
              </div>
                </div>
              </div>

              <div className='col-2 p-2'>
                <div>
                <div className='card-img'>
                <img src={img7} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4> Snacks</h4>
              </div>
                </div>
              </div>

              <div className='col-2 p-2'>
                <div>
                <div className='card-img'>
                <img src={img8} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4> Dinner</h4>
              </div>
                </div>
              </div>

              <div className='col-2 p-2'>
                <div>
                <div className='card-img'>
                <img src={img9} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4> Desert</h4>
              </div>
                </div>
              </div>

              <div className='col-2 p-2'>
                <div>
                <div className='card-img'>
                <img src={img10} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4> Starter </h4>
              </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


      <hr></hr>
      <hr></hr>
      <h1 className='text-center text-black'> Indian Street Food Recipes</h1>

      <section className='street-food p-5 mb-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='d-flex'>
            <div className='col-3 p-2'>
            <div className='card'>
              <div className='card-img-top mb-1'>
                <img src={street} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4>Bread Pakoda Recipe</h4>
              </div>
            </div>
          </div>

          <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={street1} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Pani Puri Recipe</h4>
                  </div>
                </div>
              </div>

              <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={street2} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Manchurian Recipe</h4>
                  </div>
                </div>
              </div>

              <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={street3} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Momos Recipe</h4>
                  </div>
                </div>
              </div>

             

            </div>

            <div className='d-flex'>
            <div className='col-3 p-2'>
            <div className='card'>
              <div className='card-img-top mb-1'>
                <img src={street4} className='img-fluid'/>
              </div>
              <div className='card-title text-center'>
                <h4>Burger Recipe</h4>
              </div>
            </div>
          </div>

          <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={street5} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Pakode Recipe</h4>
                  </div>
                </div>
              </div>

              <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={street6} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Soya Chap Recipe</h4>
                  </div>
                </div>
              </div>

              <div className='col-3 p-2'>
                <div className='card'>
                  <div className='card-img-top mb-1'>
                    <img src={street7} className='img-fluid'/>
                  </div>
                  <div className='card-title text-center'>
                    <h4>Egg Role Recipe</h4>
                  </div>
                </div>
              </div>

             

            </div>

            


          </div>
        </div>
      </section>      


    </div>
  )
}

export default Home
