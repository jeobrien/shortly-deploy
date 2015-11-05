var mongoose = require ('mongoose');
mongoose.connect('mongodb://127.0.0.1:4568')

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
console.log('connected.');
});

// db.once('open', function () {
  // schemas here
db.urlSchema = mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
  timestamp: Date
});

db.userSchema = mongoose.Schema({
  username: String,
  password: String,
  timestamp: Date
});

// });


module.exports = db;