import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SpotList() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/api/spots')
      .then(res => {
        setSpots(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Spot List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
            
          {spots.map(spot => (
            <tr key={spot.id}>
              <td>{spot.id}</td>
              <td>{spot.name}</td>
              <td>{spot.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpotList;