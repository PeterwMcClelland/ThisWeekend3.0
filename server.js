const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5002;
require('dotenv').config();
const uri = process.env.MONGODB_URI;



mongoose.connect(process.env.MONGODB_URI, {
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

const signupRouter = require('./src/routes/SignUp/signup');
app.use('/api/signup', signupRouter);

const loginRouter = require('./src/routes/LoginForm/login');

const logRequestBody = (req, res, next) => {
  console.log('Request Body:', req.body);
  next();
};

app.use('/api/login', logRequestBody, loginRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
