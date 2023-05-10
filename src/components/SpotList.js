import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'


const copyPin = <FontAwesomeIcon icon={faCopy} />

function SpotList() {
  const [spots, setSpots] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5002/api/spots')
      .then(res => {
        setSpots(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const filteredSpots = spots.filter(spot => {
    const name = spot.name.toLowerCase();
    const address = spot.address.toLowerCase();
    const info = spot.info ? spot.info.toLowerCase() : "";
    const query = searchQuery.toLowerCase();
    return name.includes(query) || address.includes(query) || info.includes(query);
  });

  return (
    <div className="spot-card">
  <input
  id='searchbar'
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search..."
  />
  
  {filteredSpots.map((spot) => (
    
    <div key={spot._id} className="spots-container">
      <div className='columns-container'>
      <div className="column2">
        <img
          className="spot-img"
          src={spot.imgPath}
          alt={spot.name}
        />
      </div>
      <div className="column1">
        <div className="card-text">
          <h2>{spot.name}</h2>
          <p className="spot-info">{spot.info}</p>
          <p className="textarea">
             {spot.address}
          </p>
          <div
            className="copypin"
            onClick={() => {
              navigator.clipboard.writeText(spot.address);
            }}
          >
            {copyPin}
          
          </div>
        </div>
      </div>
      </div>
    </div>
  ))}
</div>
    
  );
}

export default SpotList;