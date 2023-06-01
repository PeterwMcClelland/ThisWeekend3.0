const express = require('express');
const router = express.Router();
import User from '../services/api.js';

const User = require('../src/models/User');


router.get('/user/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).populate('favorites');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/user/:username', async (req, res) => {
  const { username } = req.params;
  const { newPassword, spotId } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.password = newPassword;
    user.favorites.push(spotId);
    await user.save();

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/user/:username/addFavorite', async (req, res) => {
  const { username } = req.params;
  const { spotId } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.favorites.includes(spotId)) {
      user.favorites.push(spotId);
      await user.save();
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/user/:username/removeFavorite', async (req, res) => {
  const { username } = req.params;
  const { spotId } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.favorites = user.favorites.filter(id => id !== spotId);
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
