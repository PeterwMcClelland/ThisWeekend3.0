// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function SpotList() {
//   const [spots, setSpots] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5002/api/spots')
//       .then(res => {
//         setSpots(res.data);
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Spot List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
            
//           {spots.map(spot => (
//             <tr key={spot.id}>
//               <td>{spot.id}</td>
//               <td>{spot.name}</td>
//               <td>{spot.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SpotList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Spot List</h1>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th> {/* Add this line */}
            <th>Name</th>
            <th>Address</th>
            <th>Info</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {filteredSpots.map(spot => (
            <tr key={spot._id}>
              <td>{spot._id}</td>
              <td><img src={spot.imgPath} alt={spot.name} style={{ width: '100px', height: 'auto' }} /></td> {/* Add this line */}
              <td>{spot.name}</td>
              <td>{spot.address}</td>
              <td>{spot.info}</td>
              <td>{spot.favorite ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpotList;