import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const copyPin = <FontAwesomeIcon icon={faCopy} />
const star = <FontAwesomeIcon icon={faStar} />

function Spot({ spot, isFavorite, toggleFavorite }) {
  return (
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
            <div 
              className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}
              onClick={toggleFavorite}
            >
              {star}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spot;

