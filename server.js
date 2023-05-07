const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors module
const app = express();
const PORT = 5002;

// Connect to MongoDB
mongoose.connect('mongodb+srv://peterwmcclelland:K2gi77gbeYH5jrZR@cluster0.xzibbyr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON request body
app.use(express.json());

// Enable CORS
app.use(cors()); // Use the cors middleware

// Use the /api/signup endpoint
const signupRouter = require('./src/components/SignUp/signup');
app.use('/api/signup', signupRouter);

const loginRouter = require('./src/components/LoginForm/login');
app.use('/api/login', loginRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


