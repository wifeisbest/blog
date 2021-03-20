const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Duong = new Schema({
    name: { type: String, default: 'myFamily' },
    age: { type: Number, min: 18,  },
    color: { type: String, match: /[a-z]/ }
    
  });
  
module.exports = mongoose.model('Duong', Duong);
