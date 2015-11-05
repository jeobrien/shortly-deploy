var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost') // add name in

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
  console.log('connected.');
});

// db.once('open', function () {
  // schemas here




// });


module.exports = db;