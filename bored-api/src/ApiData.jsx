import React, { useState } from 'react';
import axios from 'axios';


export const ApiData = ({type}) => {
    const [data, setData] = useState([]);
    const url = `https://www.boredapi.com/api/activity?type=${type}`;

    const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
      <div className='api-div' >
        
        <button onClick={fetchData} className='button-52' > Get Activity </button>
        <div className='task-display' >
          {
              data.activity
          }
        </div>
          
      </div>
  )
}
