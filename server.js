const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5002;
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

app.post('/api/users/:userId/favorites', async (req, res) => {
  const userId = req.params.userId;
  const spotId = req.body.spotId;
  
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send('User not found');
  }

  if (!user.favorites.includes(spotId)) {
    user.favorites.push(spotId);
    await user.save();
  }

  res.json(user);
});

app.delete('/api/users/:userId/favorites/:spotId', async (req, res) => {
  const userId = req.params.userId;
  const spotId = req.params.spotId;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send('User not found');
  }

  user.favorites = user.favorites.filter(id => id.toString() !== spotId);
  await user.save();

  res.json(user);
});

app.get('/api/users/:userId/favorites', async (req, res) => {
  const userId = req.params.userId;
  
  const user = await User.findById(userId).populate('favorites');
  if (!user) {
    return res.status(404).send('User not found');
  }

  res.json(user.favorites);
});

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
