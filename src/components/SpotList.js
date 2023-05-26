import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


const copyPin = <FontAwesomeIcon icon={faCopy} />;
const solidStarIcon = <FontAwesomeIcon icon={solidStar} />;
const regularStarIcon = <FontAwesomeIcon icon={regularStar} />;

function SpotList({ loggedInUser }) {
  const [spots, setSpots] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/spots`)
        .then(res => {
            setSpots(res.data);
        })
        .catch(err => {
            console.error(err);
        });

    if (loggedInUser) {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user/${loggedInUser}`)
            .then(res => {
                setFavorites(res.data.favorites);
            })
            .catch(err => {
                console.error(err);
            });
    }
}, [loggedInUser]);

  const filteredSpots = spots.filter(spot => {
    const name = spot.name.toLowerCase();
    const address = spot.address.toLowerCase();
    const info = spot.info ? spot.info.toLowerCase() : "";
    const query = searchQuery.toLowerCase();
    return name.includes(query) || address.includes(query) || info.includes(query);
  });

  const addFavorite = (spotId) => {
    axios.put(`${process.env.REACT_APP_SERVER_URL}/api/user/${loggedInUser}/addFavorite`, { spotId })
        .then(res => {
            setFavorites(res.data.favorites);
        })
        .catch(err => {
            console.error(err);
        });
};

const removeFavorite = (spotId) => {
    axios.put(`${process.env.REACT_APP_SERVER_URL}/api/user/${loggedInUser}/removeFavorite`, { spotId })
        .then(res => {
            setFavorites(res.data.favorites);
        })
        .catch(err => {
            console.error(err);
        });
};

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
                {loggedInUser && (
                  favorites.includes(spot._id) ? (
                    <button onClick={() => removeFavorite(spot._id)}>
                      {solidStarIcon} Remove from Favorites
                    </button>
                  ) : (
                    <button onClick={() => addFavorite(spot._id)}>
                      {regularStarIcon} Add to Favorites
                    </button>
                  )
                )}
                </div>
              </div>
              </div>
    </div>
  ))}
</div>

);
}

export default SpotList;


