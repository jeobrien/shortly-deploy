var mongoose = require ('mongoose');
var URL = process.env.MONGO_URL || 'mongodb://localhost/'; 

mongoose.connect(URL);

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
  console.log('connected.');
});

module.exports = db;