import { useState } from 'react';
import { ApiData } from './ApiData';
import { ApiEmpty } from './ApiEmpty';

import './App.css'

function App() {
  const [type, setType] = useState("")
  const typeArr = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  const handleOptionChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className='App'>
      <nav>
        The-Bored-Man
      </nav>
      
      <div className='main-area' >
        
        <div className='option-div' >
          <span className='label' >Select an Option:</span>
          <select value={type} onChange={handleOptionChange}>
            <option value="">Random</option>
            {
              typeArr.map((item) => {
                return (
                  <option value={item}>{ capitalizeFirstLetter(item) }</option>
                );
                
              })
            }
        
      </select>
      {/* <p>Selected Option: {type}</p> */}
        </div>
        <div className='task-div' >
          <ApiData type={type} />
        </div>
        
      </div>
      <footer>
        This website has been developed using Vite + React by <a href='https://ankitsuman.netlify.app/' >ankitsuman07@gmail.com</a>
      </footer>
    </div>
  )
}

export default App
