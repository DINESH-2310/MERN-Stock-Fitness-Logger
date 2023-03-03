import React from 'react'
import css from './Dashboard.css'
import { motion } from 'framer-motion'
function Dashboard() {
  const top=()=>{
    window.scrollTo(0,0)}
  const transition = { type: 'spring', duration: 3 }
  return (
    <div id='body'>
      <div className='best-fit'>
        <motion.div
          initial={{ left: '238px' }}
          whileInview={{ left: '8px' }}
          transition={{ ...transition, type: 'tween' }}
        ></motion.div>
        <span>Welcome to fitnessPRO let track your health</span>
      </div>
      <div className='container'>
        <div className='row'>

          <div className='col-lg-4' id="img" >
            <img src='https://cdn.newswire.com/files/x/5e/0b/422936ed9e5e7afa0be3fc332328.jpg' />
          </div>
          <div className='col-lg-8' id='title'>
            <div className='heart-rate'>
              <span className='h-1'>💗</span>
              <span>Heart Rate</span>
              <span className='h-3'>116 rpm</span>
            </div>
            <div className="calories">
              <span className='chart-1'>📊</span>
              <span className='c-1'>Calories Burned</span>
              <span className='c-3'>220 kcal</span>

            </div>
            <div>
              <span className='main1'>Stay fit a little more💖 </span><br />
            </div>
            <div className='main2'>
              <span>Live Your Life a Little More</span>
            </div>

            <div className='submain'>
              <div>
                <span>140+</span>
                <span>Coachs</span>
              </div>
              <div>
                <span>1 Million+</span>
                <span>Users</span>
              </div>
              <div>
                <span>102</span>
                <span>online Programs</span>
              </div>
            </div>

            <div className='d-flex'>
              <a className='btn btn-dangera' href='/sigin' >Join</a>
              <button className='btn-primasry' ><a href='/portal/about'>Learn more</a></button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6' id='container-2'>
            <h1>Set goals.</h1>
            <h3>
              With FitnessPRO, you can set goals and challenges and make sure you stay motivated on your fitness journey.

            </h3>
          </div>
          <div className='col-lg-6'>
            <img src='https://stories.freepiklabs.com/storage/31647/fitness.svg'></img>
          </div>

        </div>

      </div>
      <div className='container' >
        <div className='row'>
          <div className='col-lg-6'>
            <img src='https://stories.freepiklabs.com/storage/36481/Fitness-stats-01.svg'></img>
          </div>
          <div className='col-lg-6' id='container-2'>
            <h2>Personalized exercise programs.</h2>
            <h3>FitnessPRO offers tailored workout programs designed just for you to help you achieve your fitness goals.

            </h3>

          </div>


        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6' id='container-2'>
            <h2>Personal Trainer</h2>
            <h3> For Prime members we are proving personal trainer to guiding and make the records for foods,workouts,timetable. its help you to easy and Quik results</h3>
          </div>
          <div className='col-lg-6'>
            <img src='https://stories.freepiklabs.com/storage/53550/Coaches-(1)_Mesa-de-trabajo-1.svg'></img>
          </div>

        </div>
      </div>
      <div className='container' id='community'>
        <div className='row'>
          <div className='col-lg-10'>
            <h1>To Join Our Community Now</h1>
            <img src='https://www.healthybrainforlife.com/wp-content/uploads/2017/08/chris-about-me-picture.jpg'></img>
            <img src='https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg'></img>
            <img src='https://th.bing.com/th/id/R.cb45e0a9948e933aef0b2b2eec137674?rik=%2bPY1t6pvJv%2bDoQ&riu=http%3a%2f%2fwww.americus-sumterchamber.com%2fwp-content%2fuploads%2f2017%2f12%2f5-Secrets-of-the-Most-Successful-Business-People-post.jpg&ehk=znhzHhmT3KlXKIwg8f1grvDmEY7%2fb62O8nQXPG%2fwJMY%3d&risl=&pid=ImgRaw&r=0'></img>
            <img src='https://th.bing.com/th/id/OIP.V-nKHjpTGlQx_tVJI-Et_AHaHa?pid=ImgDet&rs=1'></img>
            <img src='https://i.pinimg.com/736x/96/bd/26/96bd2600ea749940617b58e744aa5d48--ninjas-south-africa.jpg'></img>
            <img src='https://i.pinimg.com/originals/bb/dc/74/bbdc74850079435e2393096e9d2a79bf.jpg'></img>
            <img src='https://3.bp.blogspot.com/-MT6uCrzwmCI/WyDe5VKbCbI/AAAAAAABY1Q/-MrV3g3upNgQAKTJOUr6TlnkrDnCJQDBwCLcBGAs/s1600/DfgEXtzXcAA90mr.jpg'></img>
            <img src='https://th.bing.com/th/id/OIP.l3vD5_b77jEGygPIMaV7nQHaLH?pid=ImgDet&w=640&h=960&rs=1'></img>
            <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dscf7503-1592418773.jpg?crop=1.00xw:0.806xh;0,0.194xh&resize=480:*'></img>
            <img src='https://th.bing.com/th/id/OIP.l3vD5_b77jEGygPIMaV7nQHaLH?pid=ImgDet&w=640&h=960&rs=1'></img>
            <img src='https://th.bing.com/th/id/OIP.FXp9agPnNBDm_snSZ8fFZAHaJ4?pid=ImgDet&rs=1'></img>
            <img src='https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjE2MDAiLCJoIjoiMTIw/MCJ9LCJ3Ijp7InR4Ijoi/TW9ybyBCYXJpa2lzdVxu/bW9kZWxtYW5hZ2VtZW50/LmNvbVwvbW9kZWxcL21v/cm8tYmFyaWtpc3UtMSIs/InR4byI6eyJsIjoiNzIw/IiwiaCI6IjcyMCJ9fSwi/MCI6eyJ3Ijp7ImxnIjoi/MSIsImxnaCI6IjE5MSIs/ImxnZyI6ImYifX19LCJp/ZCI6Imk2NDg1NTM0Iiwi/ZiI6ImpwZyJ9.jpg'></img>
            <img src='https://th.bing.com/th/id/OIP.20Bm3TeOkq03yhTSPABK_AHaJP?pid=ImgDet&w=736&h=919&rs=1'></img>

          </div>
          <div className='mail-box'>
            <input type="email" className='input-box'></input>
            <button onClick={FormData.clear} className='btn btn-danger'>Enquire</button>
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
          <div className='col-lg-4'>
            <h5>Serives</h5>
            <h5>Product</h5>
            <h5>Carrier</h5>
            <h5>Resource</h5>
            <h5>Environment study</h5>

          </div>
          <div className='col-lg-4'>
            <h4>Social medaia</h4>
          <h5>Facebook</h5>
            <h5>Linkedin</h5>
            <h5>Instragram</h5>
            <h5>Whatsapp</h5>
          </div>
        </div>

      </footer>
      <button  onClick={top} className='top-button'>^</button>
    </div>

  )
}

export default Dashboard