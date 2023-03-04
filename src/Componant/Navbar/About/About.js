import React from 'react'
import './About.css'
function About() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6' id="about">
                    <h2>Welcome to FitPro</h2>
                    <p>
                        At FitPro, we believe that fitness should be accessible to everyone. 
                    Whether you're just starting out on your fitness journey or you're a seasoned athlete, we're here to help you achieve your goals and feel your best.
                    </p>
                    <p>
                    Our team of certified fitness professionals is dedicated to providing you with the 
                    support and guidance you need to succeed. We offer a range of services, including personalized training programs, nutrition coaching, and group fitness classes, all designed to help you reach your full potential.
                    </p>
                    <p>
                    At FitPro, we're not just about fitness. 
                    We're also about community. We believe that working out with others is a powerful way to stay motivated, stay accountable, and have fun. That's why we offer a variety of group fitness classes, where you can meet like-minded people and work towards your goals together.
                    </p>
                    <p>
                    Whether you're looking to lose weight, build muscle, improve your athletic performance, or just feel better in your own skin, we're here to help. 
                    So why not join the FitPro community today and start your fitness journey? We can't wait to see what you can achieve!

                    </p>
                </div>
                <div className='col-lg-6' id='aboutimg'>
                <img src='https://cdni.iconscout.com/illustration/premium/thumb/man-using-fitness-tracking-watch-5627323-4688093.png'></img>
                </div>
            </div>
        </div>

        <footer>
        <div className='row' id='footer'>
          <div className='col-lg-4'>
          <a class="navbar-brands" href="#">
                    <img src="https://th.bing.com/th/id/OIP.nhFes2aoef2v5ouwrrdDzwHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Fitness<span>PRO</span>
                </a>
                <h4>About</h4>
                <h6> FitnessPRO is world largest company. we have more 1.2 Millons happy customers and 1k+ wroking employess</h6>
                <h6> we are contacting online programs with free of cast and collect cutomer oppion </h6>
          </div>
          <div className='col-lg-4' id='activity'>
            <h5>Serives</h5>
            <h5>Product</h5>
            <h5>Carrier</h5>
            <h5>Resource</h5>
            <h5>Environment study</h5>

          </div>
          <div className='col-lg-4' id='activity'>
            <h4>Social medaia</h4>
          <h5>Facebook</h5>
            <h5>Linkedin</h5>
            <h5>Instragram</h5>
            <h5>Whatsapp</h5>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default About
