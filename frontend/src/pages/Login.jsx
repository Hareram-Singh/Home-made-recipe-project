import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'
import useUserContext from '../UserContext';
import { useNavigate} from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("required"),
  password: Yup.string().min(4, 'Too short!').max(20, 'Too Long!').required("required"),
});

const Login = () => {

  const navigate = useNavigate();


  const { setLoggedIn } = useUserContext();

  //initialization formik
  const loginForm = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: async (values, action) => {
        console.log(values);

        const res = await fetch('http://localhost:5000/user/authenticate', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status);
        action.resetForm();

        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
          });
          navigate('/');

          const data = await res.json();
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);

        }
        else if (res.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Email Nd Password is inCorrect'
          });
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong'
          });
        }

      },
      validationSchema: LoginSchema
    });

  return (
    <div>
      <section className="login-wrapper p-5">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-center price">LOGIN</h2>
                  <p className="text-center mb-4 price">Welcome Back!!</p>
                  <form
                    onSubmit={loginForm.handleSubmit}
                    action="#"
                    method="post"
                  >
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
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
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label mb-3">
                        Enter Your password
                      </label>
                      <span
                        style={{ color: "red", fontsize: 10, marginLeft: 10 }}
                      >
                        {loginForm.touched.password &&
                          loginForm.errors.password}
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="enter password here..."
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                      />
                    </div>

                    <div className="mb-3">
                      <Link to={"/forget"} className="form-link">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="m-0">Dont have an account?</p>
                      <Link to={"/signup"} className="form-link">
                        Sign up
                      </Link>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
