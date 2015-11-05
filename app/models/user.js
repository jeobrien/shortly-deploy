var db = require('../mongooseDB');

var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = mongoose.model('User', userSchema);



db.userSchema.methods.initialize = function () {
  this.on('creating', this.hashPassword);
};
db.userSchema.methods.comparePassword = function (attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};
db.userSchema.methods.hashPassword = function () {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
    .then(function(hash) {
      this.set('password', hash);
    });
};

module.exports = User;
// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function(){
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function(){
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });

