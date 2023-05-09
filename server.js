const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();
const PORT = 5002;




mongoose.connect( 'mongodb+srv://peterwmcclelland:K2gi77gbeYH5jrZR@cluster0.xzibbyr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());


app.use(cors()); 

app.get('/api/spots', async (req, res) => {
    try {
      const spots = await mongoose.connection.db.collection('Spots').find({}).toArray();
      res.json(spots);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

// Use the /api/signup endpoint
const signupRouter = require('./src/components/SignUp/signup');
app.use('/api/signup', signupRouter);

const loginRouter = require('./src/components/LoginForm/login');
app.use('/api/login', loginRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


