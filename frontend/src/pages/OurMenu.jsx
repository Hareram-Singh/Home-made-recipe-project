import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoHeart } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const OurMenu = () => {
  const navigate = useNavigate();

  const [recipeList, setrecipeList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/recipe/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setrecipeList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterRecipe = (e) => {
    const value = e.target.value;
    setrecipeList(
      masterList.filter((recipe) => {
        return (
          recipe.title.toLowerCase().includes(value.toLowerCase()) ||
          recipe.category.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  };

  const displayRecipeData = () => {
    if (recipeList.length === 0) {
      return (
        <h1 className="text-center fw-bold" style={{ color: "seagreen" }}>
          No Data Found
        </h1>
      );
    }

    const ratingChanged = (newRating) => {
      console.log(newRating);
    };

    return recipeList.map((recipe) => (
      <div className="col-md-3 mb-4 ">
        <div className=" recipe-bg">
        <div className="card">
        <div className="small-card">
          <div className="social-icons">
            <span className="icon ">
              <IoHeart />
            </span>
          </div>
        </div>

        <div className="small-cards">
          <div className="social-icons">
            <span className="icon">
              <FaShare />
            </span>
          </div>
        </div>

        <div className="card-img">
          <img
            src={"http://localhost:5000/" + recipe.image}
            alt=""
            className="card-img-top img-fluid"
            style={{ objectFit: "cover", height: 220 }}
          />
        </div>

        <div className="card-body">
          <div className="card-title">
            <h6>{recipe.title}</h6>
          </div>
          <p>{recipe.category}</p>

          <ReactStars
            count={5}
            onChange={ratingChanged}
            value={4}
            size={24}
            activeColor="#cca27e"
          />
        </div>
        <div className="card-footer ">
          <button
            className="btn btn-dark mx-5 me-1 px-2 "
            onClick={() => {
              navigate("/ShowRecipe/" + recipe._id);
            }}
          >
            Click to View
          </button>
        </div>
      </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="">
      <section className="menu-banner">
        <div className="container-xxl">
          <div className="row  justify-content-center recipie-title">
            <div className="menu-banner-details text-center d-flex flex-column align-items-center mt-4 mb-3">
              <h1 className="text-white ">Recipe Index Of Ballians Recipe</h1>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search Recipes..."
            className="form-control w-75 m-auto"
            onChange={filterRecipe}
          />
        </div>
      </section>
      <div className="container mt-3 ">
        <div className="row mt-5 p-2"> {displayRecipeData()} </div>
      </div>

      <section className="pagination p-3">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;
