import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("required"),
  
});

const Forget = () => {

  const loginForm = useFormik({
    initialValues: {
      email: "",
      
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: LoginSchema,
  });
  return (
    <div>
      
    <section className="login-wrapper p-5">
    <div className="container-xxl">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-4">
                <h2 className="text-center price fs-4">Forgot password</h2>
                <p className="text-center mb-4 price fs-8" >
                  Enter your email address to receive a reset confirmation
                </p>
                <form onSubmit={loginForm.handleSubmit}
                action="#"
                method="post">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-3"
                    >
                      Enter Your Email address
                    </label>
                    <span
                        style={{ color: "red", fontsize: 10, marginLeft: 10 }}
                      >
                        {loginForm.touched.email && loginForm.errors.email}
                      </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter email here ..."
                      onChange={loginForm.handleChange}
                        value={loginForm.values.email}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Submit</button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Forget
