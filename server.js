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

// Use the /api/signup endpoint
const signupRouter = require('./src/components/SignUp/signup');
app.use('/api/signup', signupRouter);

const loginRouter = require('./src/components/LoginForm/login');
app.use('/api/login', loginRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


