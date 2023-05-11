import React from 'react';
import Spot from './Spot';

function FavoriteSpots({ favorites }) {
  return (
    <div className="favorites">
      <h1>Favorite Spots</h1>
      {favorites.map((spot) => (
        <Spot
          key={spot._id}
          spot={spot}
        />
      ))}
    </div>
  );
}

export default FavoriteSpots;
