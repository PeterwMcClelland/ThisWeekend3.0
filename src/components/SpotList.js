import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spot from './Spot';

function SpotList({ favorites, setFavorites }) {
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

  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = (id) => {
    if (isFavorite(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

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
        <Spot
          key={spot._id}
          spot={spot}
          isFavorite={isFavorite(spot._id)}
          toggleFavorite={() => toggleFavorite(spot._id)}
        />
      ))}
    </div>
  );
}

export default SpotList;

