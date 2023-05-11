const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Spot'
 }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
