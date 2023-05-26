// const express = require('express');
// const axios = require('axios');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const path = require('path');
// const PORT = process.env.PORT || 5002;
// require('dotenv').config();
// const uri = process.env.MONGODB_URI;



// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use(express.json());
// app.use(cors());

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/manifest.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'manifest.json'));
// });

// const api = axios.create({
//   baseURL: process.env.NODE_ENV === 'production' ? 'https://thisweekend.herokuapp.com/' : 'http://localhost:5002'
// });

// api.get('/spots').then(response => {
//   console.log(response.data);
// });


// app.get('/api/spots', async (req, res) => {
//   try {
//     const spots = await mongoose.connection.db.collection('Spots').find({}).toArray();
//     res.json(spots);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   }
// });

// const signupRouter = require('./src/routes/SignUp/signup');
// app.use('/api/signup', signupRouter);

// const loginRouter = require('./src/routes/LoginForm/login');

// const logRequestBody = (req, res, next) => {
//   console.log('Request Body:', req.body);
//   next();
// };

// app.use('/api/login', logRequestBody, loginRouter);

// app.use(express.static(path.join(__dirname, '/client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const path = require('path');
// const PORT = process.env.PORT || 5002;
// require('dotenv').config();
// const uri = process.env.MONGODB_URI;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use(express.json());
// app.use(cors());

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/manifest.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'manifest.json'));
// });

// app.get('/api/spots', async (req, res) => {
//   try {
//     const spots = await mongoose.connection.db.collection('Spots').find({}).toArray();
//     res.json(spots);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   }
// });

// const signupRouter = require('./src/routes/SignUp/signup');
// app.use('/api/signup', signupRouter);

// const loginRouter = require('./src/routes/LoginForm/login');

// const logRequestBody = (req, res, next) => {
//   console.log('Request Body:', req.body);
//   next();
// };

// app.use('/api/login', logRequestBody, loginRouter);

// app.use(express.static(path.join(__dirname, '/client/build')));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }


// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const path = require('path');
// const PORT = process.env.PORT || 5002;
// require('dotenv').config();
// const uri = process.env.MONGODB_URI;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use(cors());  // Make sure you use the CORS middleware here, before your routes
// app.use(express.json());

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/manifest.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'manifest.json'));
// });

// app.get('/api/spots', async (req, res) => {
//   try {
//     const spots = await mongoose.connection.db.collection('Spots').find({}).toArray();
//     res.json(spots);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   }
// });

// const signupRouter = require('./src/routes/SignUp/signup');
// app.use('/api/signup', signupRouter);

// const loginRouter = require('./src/routes/LoginForm/login');

// const logRequestBody = (req, res, next) => {
//   console.log('Request Body:', req.body);
//   next();
// };

// app.use('/api/login', logRequestBody, loginRouter);

// app.use(express.static(path.join(__dirname, '/client/build')));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT;
require('dotenv').config();
const uri = process.env.MONGODB_URI;

const apiRoutes = require('./services/api');

app.use(cors()); 
app.use('/api', apiRoutes);





mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());

const signupRouter = require('./src/routes/SignUp/signup');
app.use('/api/signup', signupRouter);

const loginRouter = require('./src/routes/LoginForm/login');

const logRequestBody = (req, res, next) => {
  console.log('Request Body:', req.body);
  next();
};

app.use('/api/login', logRequestBody, loginRouter);

app.get('/api/spots', async (req, res) => {
  try {
    const spots = await mongoose.connection.db.collection('Spots').find({}).toArray();
    res.json(spots);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
  
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log('Server URL:', process.env.REACT_APP_SERVER_URL);
});