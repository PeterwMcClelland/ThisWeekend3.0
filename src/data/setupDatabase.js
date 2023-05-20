// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb+srv://peterwmcclelland:K2gi77gbeYH5jrZR@cluster0.xzibbyr.mongodb.net/'; 
// const dbName = 'this-weekend'; // Replace with your database name
// const collectionName = 'Spots'; // Replace with your collection name

const initialDetails = [
//     {
//         imgPath: "/img/calspharmacy.png",
//         name: "Cal's Pharmacy - Skate Shops",
//         address: "1400 E Burnside St, Portland, OR 97214",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/ParkBlocks.jpeg",
//         name: "Park Blocks - Stairs",
//         info: "Long 9 Stair.",
//         address: "1000 SW Park Ave, Portland, Oregon",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/Burnside.png",
//         name: "Burnside - Skate Parks",
//         info: "Iconic DIY Skatepark",
//         address: "SE 2nd Ave, Portland, OR 97232",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/beavertonpark.jpeg",
//         name: "Beaverton Park - Skate Parks",
//         info: "Ramps/Ledges",
//         address: "NW Schlottman Pl, Beaverton, OR 97006",
//         favorite: false,
//      },
//     {
//         imgPath: "/img/capitalhill9.png",
//         name: "Capital Hill 9 - Rails",
//         info: "Capitol Hill 9 Stair rail.",
//         address: "8401 SW 17th Ave, Portland, OR 97219, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/catspaw-004.jpeg",
//         name: "Cats Paw Saloon - Bars",
//         info: "Owned by Mickey Reyes, it's a great dive bar.",
//         address: "3565 SE Division St, Portland, OR 97202",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/church9stair.png",
//         name: "Church 9 - Stairs",
//         info: "9 stair at a church.",
//         address: "NW Everett & 19th, Portland, OR 97209, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/Crestonledge.png",
//         name: "Creston Ledge - Ledges",
//         info: "Shoot out ledge at Creston Elementary School.",
//         address: "4701 SE Bush St, Portland, OR 97206, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/dwnledge.png",
//         name: "Goose Hollow - Ledges",
//         info: "Goose Hollow long downhill ledge.",
//         address: "1643 SW Montgomery St, Portland, OR 97201, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/flatbarrail.png",
//         name: "Flat Bar - Rails",
//         info: "Down hill flat bars in North West Portland.",
//         address: "2230 W Burnside St, Portland, OR 97210, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/HalfCircle.png",
//         name: "Half Circle - Ledges",
//         info: "Fun ledge/ manual in downtown Portland.",
//         address: "198 SW 6th Ave, Portland, Oregon",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/harriettubman.png",
//         name: "Harriet Tubman - Rails",
//         info: "7 Stair Rail",
//         address: "2231 N Flint Ave, Portland, OR 97227, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/lafitness-rail.png",
//         name: "LA Fitness - Rails",
//         info: "8 stair rail in the parking garage of LA Fitness.",
//         address: "1420 Lloyd Center, Portland, OR 97232, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/lafitness13.png",
//         name: "LA Fitness 13 - Stair / Rail.",
//         info: "Go after hours to avoid secerity.",
//         address: "1420 Lloyd Center, Portland, OR 97232, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/RckJjHV.jpeg",
//         name: "Common Wealth - Skate Parks / Skate Shops",
//         info: "$10 for 2 Hours, $13 All Day",
//         address: "1425 SE 20th Ave., Portland, OR",
//         favorite: false,
//     },
//    {
//         imgPath: "/img/rockmanny.png",
//         name: "Rock Manny - Manual Pads",
//         info: "Manual pad in the park blocks.",
//         address: "Location: 827 SW Columbia St, Portland, OR 97201, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/savier-bump.jpeg",
//         name: "Savier Bump - Bumps",
//         info: "Big drop ruff landing.",
//         address: "331 SE Madison St #120, Portland, OR 97214, USA",
//         favorite: false,
//     },
     
//     {
//         imgPath: "/img/Shrunken-Head.png",
//         name: "Shrunken Head - Skate Shops",
//         info: "Skate Shop in SouthEast Portland",
//         address: "531 SE Morrison St, Portland, OR 97214",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/tactics.png",
//         name: "Tactics - Skate Shops",
//         info: "Open 10AM-8PM",
//         address: "901 NW Davis St, Portland, OR 97209",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/waterfronhubba.png",
//         name: "WaterFront Hubba - Hubba Ledge",
//         info: "Long 4 stair hubba.",
//         address: "Bill Naito Legacy Fountain, 2 SW Naito Pkwy, Portland, OR 97204, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/zoobombgap.png",
//         name: "Zoo Bomb Gap - Flat Gap",
//         info: "Down hill flat gap.",
//         address: "2670 SW Tichner Dr, Portland, OR 97205, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/lentledge.png",
//         name: "Lent Planters - Ledges",
//         info: "Multiple small planter ledges.",
//         address: "5105 SE 97th Ave, Portland, OR 97266, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/HumpLedges.jpg",
//         name: "Hump Ledges - Ledges",
//         info: "Long wavy ledges.",
//         address: "810 SE Belmont St #100, Portland, OR 97214, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/banktoledge.png",
//         name: "Bank Rail - Banks / Rails",
//         info: "Bank to Rail",
//         address: "4341 SW View Point Terrace, Portland, OR 97239, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/EdBennidict.png",
//         name: "Ed Benedict - Skate Parks",
//         info: "Ledges rails and stairs.",
//         address: "10125 SE Powell Blvd, Portland, OR 97266",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/bankgap.png",
//         name: "Bank to Bank Gap - DIY Bank",
//         info: "Two DIY Banks with a gap in the middle.",
//         address: "706 OR-99E, Portland, OR 97214, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/DIYbarrier.png",
//         name: "Larrabee Barrier - Banks / Barriers",
//         info: "Larrabee DIY Barrier.",
//         address: "2399 N Harding Ave, Portland, OR 97227, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/Block17.png",
//         name: "Block 17 - Stair",
//         info: "10 to 12 stair with a slanted landing.",
//         address: "1315 NW 11th Ave, Portland, OR 97209, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/catholicchurch6.png",
//         name: "Catholic Church 6 - Stairs / Rails",
//         info: "6 Stair Rail",
//         address: "3400 SE 43rd Ave, Portland, OR 97206, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/21StairRail.png",
//         name: "Madison Rail - Rails",
//         info: "21 Stair Rail",
//         address: "226 SE Madison St, Portland, OR 97214, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/ChristChurch.png",
//         name: "Christ Church 9 - Rails",
//         info: "Long 9 stair rail.",
//         address: "1060 Chandler Rd, Lake Oswego, OR 97034, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/woodlandflatbar.png",
//         name: "Woodland Rail - Flat Bars / Rails",
//         info: "Pop out flat bar.",
//         address: "1914 NE 102nd Ave, Portland, OR 97220, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/curveledge.png",
//         name: "Curb Curve Ledge - Ledges",
//         info: "Curb ledge over dirt.",
//         address: "1964 SE 30th Ave, Portland, OR 97214, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/overrail.png",
//         name: "Comfort Suites 8 - Stairs / Rails",
//         info: "8 stair rail perfact for skating over.",
//         address: "11340 SW 60th Ave, Portland, OR 97219, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/cascadeledges.png",
//         name: "Cascade ledges - Ledges",
//         info: "Cascade College Ledges",
//         address: "705 N Killingsworth St, Portland, OR 97217, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/newburge.png",
//         name: "Newberg - Skate Parks",
//         info: "Great transition park",
//         address: "1201 S Blaine St, Newberg, OR 97132",
//         favorite: false,
//     },
//      {
//         imgPath: "/img/8Stairrail.png",
//         name: "8 Stair - Rail / Stairs",
//         info: "8 Stair rail.",
//         address: "13 SE 2nd Ave, Portland, OR 97214, USA",
//         favorite: false,
//     },
//      {
//         imgPath: "/img/SquareLedges.png",
//         name: "Square Ledges - Ledges",
//         info: "Three square ledges.",
//         address: "1510 SW 6th Ave, Portland, OR 97201, USA",
//         favorite: false,
//     },
//      {
//         imgPath: "/img/StClair5.png",
//         name: "St. Clair 5 - Rails",
//         info: "St. Clair 5 stair rail.",
//         address: "SW Park Pl & Vista, Portland, OR 97205, USA",
//         favorite: false,
//     },
//      {
//         imgPath: "/img/pccledge.png",
//         name: "PCC Education Building - Ledges",
//         info: "Public Services Education Building ledge.",
//         address: "909 N Killingsworth St, Portland, OR 97217, USA",
//         favorite: false,
//     },
//      {
//         imgPath: "/img/pettygrovepark.png",
//         name: "Pettygrove Park - Gap / Barrier",
//         info: "It is a barrier to drop in the middle of the park.",
//         address: "200 SW Pedestrian Trail, Portland, OR 97201, USA",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/lincoln10stair.png",
//         name: "Lincoln High 10 - Stairs / Rails",
//         info: "Ten stair at Lincoln high school.",
//         address: "Lincoln High School, Portland, OR 97201, USA" ,
//         favorite: false,
//     },
//     {
//         imgPath: "/img/tualatinskatepark.jpeg",
//         name: "Tualatin Park - Skate Parks",
//         info: "Fun park, everything is small and easy to skate.",
//         address: "8515-8523 SW Tualatin Rd, Tualatin, OR 97062, United States",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/substunceskateshop.png",
//         name: "Substunce - Skate Shops",
//         info: "Skate shop in Beaverton.",
//         address: "9950 SW Beaverton Hillsdale Hwy, Beaverton, OR 97005",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/EsplanadeLedge.png",
//         name: "Esplanade - Ledges",
//         info: "Long over dirt gap ledge.",
//         address: "35 SE Main St, Portland, OR 97214",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/esplanadeupledge.png",
//         name: "Esplanade Up Ledge - Ledges",
//         info: "Steep up ledge very hard to skate.",
//         address: "35 SE Main St, Portland, OR 97214",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/Esplanademanualpad.png",
//         name: "Esplanade Pad - Manual Pads",
//         info: "Long curb high manual pad. Good spot to warm up.",
//         address: "35 SE Main St, Portland, OR 97214",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/powellspot.png",
//         name: "Powell - Ledges",
//         info: "Up Ledge on side of street.",
//         address: "SE 19th and SE Powell Blvd",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/glenhaven.png",
//         name: "Glenhaven - Skate Parks",
//         info: "Fun park with a little bit of everything.",
//         address: "7900 NE Siskiyou St, Portland, OR, 97213",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/pierpark.png",
//         name: "Pier Park - Skate Parks",
//         info: "Skate park with a good varity.",
//         address: "10421 N. Lombard Street, Portland, Oregon, 97203",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/gatewaydiscovery.png",
//         name: "Gateway - Skate Parks",
//         info: "Transition park with street section.",
//         address: "10520 NE Halsey St, Portland, OR 97220",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/img-0541_orig.jpg",
//         name: "The Courts - Skate Parks / DIY",
//         info: "Local DIY Spot in tennis courts. It constently growing and changing.",
//         address: "1948 SW Broadway, Portland, OR 97201",
//         favorite: false,
//     },
//     {
//         imgPath: "/img/Tabor15.png",
//         name: "Tabor 15 - Rails",
//         info: "Steep 15 stair rail.",
//         address: "SE Salmon Way and, SE Park Dr, Portland, OR 97215, USA",
//         favorite: false
//     },
//     {
//         imgPath: "/img/Mount Tabor park ledge.png",
//         name: "Tabor Park Ledges - Ledges",
//         info: "Crusty stair ledges at Tabor Park.",
//         address: "GC63+M2, Portland, OR 97215, USA",
//         favorite: false
//     },
    // {
    //     imgPath: "",
    //     name: "",
    //     info: "",
    //     address: "",
    //     favorite: false
    // },
  // Add more items as needed
];

// async function setupDatabase() {
//     try {
//       const client = await MongoClient.connect(url, 
//         { 
//           useUnifiedTopology: true 
//         });
//       const db = client.db(dbName);
//       const collection = db.collection(collectionName);
  
//       await collection.insertMany(initialDetails);
//       console.log('Data inserted successfully.');
  
//       client.close();
//     } catch (error) {
//       console.error('Error inserting data:', error);
//     }
//   }
  
//   setupDatabase();

async function setupDatabase(mongoose) {
  try {
      const db = mongoose.connection;
      const collection = db.collection('Spots');

      await collection.insertMany(initialDetails);
      console.log('Data inserted successfully.');
  } catch (error) {
      console.error('Error inserting data:', error);
  }
}

module.exports = setupDatabase;
