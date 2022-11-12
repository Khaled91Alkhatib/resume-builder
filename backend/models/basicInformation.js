const mongoose = require('mongoose');

const basicInformation = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },

  jobTitle: {
    type: String
  },

  email: {
    type: String,
    required: true
  },

  website: {
    type: String,
  },

  location: {
    type: String
  }

});

module.exports = mongoose.model('basicInformation', basicInformation);