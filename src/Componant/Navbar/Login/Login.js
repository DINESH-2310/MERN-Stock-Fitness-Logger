import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import Signin from './Signin/Signin';
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect, useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';
import UserContext from '../../../UserContext';
function Login() {
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  let error = {};
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validate: (values) => {


      if (!values.email) {
        error.email = "Please enter valide emailID"
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = "invalid email"
      }

      if (!values.password) {
        error.password = "create password"
      }
      else if (values.password.length < 6) {
        error.password = "Length greater than 6";
      }
      return error
    },
    onSubmit: (values) => {

      axios.post("https://mern-v51t.onrender.com/api/sigin", values)
        .then(res => {
          navigate("/portal/dashboard")
        })
        .catch(err => {
          toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
    }

    //
  }


  )



  return (
    <section>
      <div class="container py-5" id="sigin1">
        <div class="row d-flex  ">
          <div class="col">
            <div class="card " id='enter'>

              <div class="row g-0">
                <div class="col-md-6 d-xl-block" >
                  <img src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1068140/6250/6250/m1/fpnw/wm0/fitness-.jpg?1457489748&s=e8559d0620f500243a2165433c34e67b"
                    alt="Sample photo" class="img-fluid"
                  />
                </div>

                <div class="col-md-6 md-4" id='11'>
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase" id='h3'>Login</h3>
                    <form onSubmit={formik.handleSubmit}>

                      <div class="row">
                        <div class="form-outline">


                        </div>
                        <div class="form-outline mb-4">
                          <span style={{ color: "red" }}>{formik.errors.email}</span>
                          <input onChange={formik.handleChange}
                            value={formik.values.email} name="email" type="text" id="form3Example97" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example97">Email ID</label>
                        </div>
                        <div class="form-outline mb-4">
                          <span style={{ color: "red" }}>{formik.errors.password}</span>
                          <input onChange={formik.handleChange}
                            value={formik.values.password} name="password" type="text" id="form3Example97" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example97">Password</label>
                        </div>

                        <button onClick={''} type="submit" class="btn btn-warning btn-lg ms-2">Login</button>

                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="dark"
                        />
                      </div>
                      <br></br>


                      <h7 classname="btn btn-facebook btn-user btn-block">.......OR...........</h7>
                      <br></br>
                      <br></br>

                      <a href="/sigin" class="btn btn-facebook btn-user btn-block ml-1" id="34">


                        <i class="fab fa-facebook-f fa-fw"></i> Create an new Account
                      </a>
                    </form>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  )
}

export default Login;
