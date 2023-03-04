import React from 'react'
import Navbar from './Nav.css'
import Boostrap from '../../././../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
       
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
                    <img src="https://th.bing.com/th/id/OIP.nhFes2aoef2v5ouwrrdDzwHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Fit<span>PRO</span>
                </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link class="nav-item" to={'/portal/dashboard'}>
          <a class="nav-link active" aria-current="page" href="#">DashBoard</a>
        </Link>
        <Link  class="nav-item" to={'/portal/profile'}>
          <a class="nav-link" href="#">Profile</a>
        </Link>
       
        <li class="nav-item">
         <Link to={'/portal/about'}><a class="nav-link disabled">About</a></Link> 
        </li>
      </ul>
      <form class="d-flex" role="search">
     
        <Link to={'/'} ><a class="nav-link m-3" id='login' href="#"> Logout </a>
        </Link>
        <Link to={'/sigin'}>
          <a class="nav-link m-3" id='signin' href="#">Signin</a>
          </Link>
       
      </form>
    </div>
  </div>
</nav>
        </div>

    )
}

export default Nav
