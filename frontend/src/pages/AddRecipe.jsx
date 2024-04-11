import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddRecipe = () => {
  const navigate = useNavigate();
  const [setImage, setSetImage] = useState("");

  const recipeForm = useFormik({
    initialValues: {
      title: "",
      category: "",
      ingredients: "",
      method: "",
      image: "",
    },

    onSubmit: async (values, action) => {
      console.log(values);
      values.image = setImage;
      const res = await fetch("http://localhost:5000/recipe/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Recipe Added Successfully!",
        });

        // Reset the form values after a successful submission
        navigate("/OurMenu");
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials!",
          text: "Plz Try Again",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
      }
    },
  });

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSetImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);
  };

  return (
    <section
      className="form p-5 add-recipe "
      
    >
      <div className="container-xxl">
        <div className="row justify-content-center align-items-center ">
        
          <div className="col-8 p-5">
            <div className="card shadow">
              <div className="card-body mx-auto w-100">
                <h4 className="card-title mt-1 mb-4 text-center fw-bold fs-2">
                  Add Recipe
                </h4>
                <form className="" onSubmit={recipeForm.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold fs-5">
                      Food Title
                    </label>
                    <input
                      placeholder="Recipe Name"
                      type="text"
                      className="form-control w-100"
                      id="title"
                      name="title"
                      onChange={recipeForm.handleChange}
                      value={recipeForm.values.title}
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="category"
                      className="form-label fw-bold fs-5"
                    >
                      Category
                    </label>
                    <input
                      placeholder="Veg - Non-Veg - Vegan"
                      type="text"
                      className="form-control w-100"
                      id="title"
                      name="category"
                      onChange={recipeForm.handleChange}
                      value={recipeForm.values.category}
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="ingredients"
                      className="form-label fw-bold fs-5"
                    >
                      Ingredients
                    </label>
                    <textarea
                      placeholder="Onions, Tomato and so on"
                      className="form-control"
                      id="ingredients"
                      name="ingredients"
                      onChange={recipeForm.handleChange}
                      value={recipeForm.values.ingredients}
                      rows={4}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="method" className="form-label fw-bold fs-5">
                      Method
                    </label>
                    <textarea
                      placeholder="Process..."
                      className="form-control"
                      id="method"
                      name="method"
                      onChange={recipeForm.handleChange}
                      value={recipeForm.values.method}
                      rows={6}
                      required=""
                      defaultValue={""}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold fs-5">
                      Upload Photo
                    </label>
                    <input
                      type="file"
                      className="form-control w-100"
                      id="image"
                      name="image"
                      onChange={uploadFile}
                      required=""
                    />
                  </div>
                  <button type="submit" className="p-3 ">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRecipe;
