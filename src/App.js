import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");
  const [errormessage,seterrormessage] =useState("")

  const calculateBmi = () => {
       const isvalidheight=/^\d+$/.test(height)
       const isvalideweight=/^\d+$/.test(weight)

    if (isvalideweight && isvalidheight) {

      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      seterrormessage("")
    } else {
      setBmi(null);
      setBmiStatus("");
      seterrormessage("please enter the valid height and weight ")
    }
  };

      const clearall = ()=>{
        setBmi(null);
        setBmiStatus("");
        setHeight("")
        setWeight("")

      };
  
  return (
    <>
      <div className='bmi-calculator'>  
        <div className='box'></div>
        <div className='data'></div>
        <h1>BMI CALCULATOR</h1> 

         {/* // conditional Rendering  */}

        { errormessage && <p className='error'> {errormessage} </p> }

        <div className='input-container'>
          <label className='input' htmlFor='height'>Height (cm)</label>
          <input className='input' type='text' value={height} id='height' onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className='input-container'>
          <label htmlFor='weight'>Weight (kg)</label>
          <input className='input' type='text' value={weight} id='weight' onChange={(e) => setWeight(e.target.value)} />
        </div>
        <button className='button' onClick={calculateBmi}>Calculate BMI</button>
        <button className='clear'  onClick={clearall} > clear </button>
        {bmi !== null && (
          <div className='result'> 
            <p>Your BMI is {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div> 
        )}
      </div>       
    </>
  );
}

export default App;
