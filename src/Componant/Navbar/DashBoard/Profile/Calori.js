import React from 'react'
import jQuery from 'jquery';
import { useState } from 'react';
import calorie from './Calorie.css'
function Calori() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState('');

  function calculateCalories() {
    const weightKg = weight * 0.453592;
    const heightCm = height * 2.54;
    const ageYears = age;

    let bmr;

    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
    }

    let activityMultiplier;

    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightly-active':
        activityMultiplier = 1.375;
        break;
      case 'moderately-active':
        activityMultiplier = 1.55;
        break;
      case 'very-active':
        activityMultiplier = 1.725;
        break;
      case 'extra-active':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    const dailyCalories = Math.round(bmr * activityMultiplier);
    setCalories(dailyCalories);
  }

  return (
    <div  id='calorie' >
      <div className='container' >
        <div className='row'>
          <div className='col-lg-12'>
            <div className='can' id='cal'>
              <h1>Calorie Calculator</h1>
              <form>
                <label className='valu'>
                  Weight(lbs):
                  <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </label>
                <br />
                <label className='valu'>
                  Height (in )       :
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </label>
                <br />
                <label className='valu'>
                  Age (years):
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <label className='w-10'>
                        Gender:
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </label>
                      <label className='w-10 '>
                        Activity Level:
                        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                          <option value="sedentary">Sedentary</option>
                          <option value="lightly-active">Lightly Active</option>
                          <option value="moderately-active">Moderately Active</option>
                          <option value="very-active">Very Active</option>
                          <option value="extra-active">Extra Active</option>
                        </select>
                      </label>
                    </div>
                  </div>



                </div>


                <button type="button" onClick={calculateCalories}>
                  Calculate Calories
                </button>
              </form>
              {calories && (
                <div>
                  <h2>Your daily calorie needs:</h2>
                  <p>{calories}</p>
                </div>
              )}
            </div>
          </div>

          {/* . */}
        </div>

      </div>
    </div>

  )
}

export default Calori