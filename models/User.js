const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true, 
    },
  lastname: {
     type: String, 
     required: true, 
    },
  username: {
     type: String, 
     required: true, 
     unique: true 
    },
  password: {
      type: String, 
      required: true 
    },
  email: {
       type: String, 
       required: true, 
       unique: true 
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
