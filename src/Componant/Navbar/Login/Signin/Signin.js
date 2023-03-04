import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signin.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin(props) {
  const navigate=useNavigate();

  const notify = () => toast("Wow so easy!");
  const formik = useFormik({
    initialValues: {
   
      email: "",
      password: ""
    },
    validate: (values) => {
      let error = {};

      if (!values.name) {
        error.name = "Please enter name";
      }
      else if (values.name.length < 3) {

        error.name = "Length should be greater than 3";
      }
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
    onSubmit: async(values) => {

       
     await axios.post("https://mern-v51t.onrender.com/api/register",values)
      // window.localStorage.setItem('auth',sigin)
      .then(res =>{
        navigate("/login")
      })
      .catch(err =>{

     
       toast.warn('Mail ID already exists', {
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
        
 

  }


  )
   


return (
  <section>
    <div class="container py-5 h-100" id="sigin">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration md-box-shadow-non  my-4" id="sig">

            <div class="row g-0">
              <div class="col-md-6 d-xl-block">
                <img src="https://storage.googleapis.com/mixo-sites/freepic/53055-sport-family-01.svg"
                  alt="Sample photo" class="img-fluids"
                />
              </div>

              <div class="col-md-6 md-4">
                <div class="card-body p-md-5 text-black" >
                  <h3 class="mb-5 text-uppercase">Kindly fill the form</h3>
                  <form onSubmit={formik.handleSubmit}>

                    <div class="row">
                      <div class="form-outline">
                        <span style={{ color: "red" }}>{formik.errors.name}</span>
                        <input onChange={formik.handleChange}
                          value={formik.values.name} name="name"
                          type="text" id="form3Example1m" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1m">First name</label>

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
                        <label class="form-label" for="form3Example97">Create password</label>
                      </div>

                      <button type="submit" class="btn btn-warning btn-lg ms-2"> Submit</button>
                    </div>
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

export default Signin;
