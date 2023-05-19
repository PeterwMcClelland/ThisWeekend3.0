const express = require('express');
const router = express.Router();

// Load the User model
const User = require('../src/models/User');

// API endpoint for getting user information
router.get('/user/:username', async (req, res) => {
  const { username } = req.params;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send the user information
    res.status(200).json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint for updating user information
router.put('/user/:username', async (req, res) => {
  const { username } = req.params;
  const { newPassword } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();

    // Send success response
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
