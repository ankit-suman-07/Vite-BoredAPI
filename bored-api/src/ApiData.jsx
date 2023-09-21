import React, { useState } from 'react';
import axios from 'axios';


export const ApiData = ({type}) => {
    const [data, setData] = useState([]);
    const url = `http://www.boredapi.com/api/activity?type=${type}`;

    const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  return (
      <div className='api-div' >
          <button onClick={fetchData} > Click Here </button>
          {
              data.activity
          }
        </div>
  )
}
