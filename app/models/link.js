var db = require('../mongooseDB');

var crypto = require('crypto');
var mongoose = require('mongoose');


var urlSchema = new mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: Date
});

var Link = mongoose.model('Link', urlSchema);

Link.prototype.initialize = function(){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
};

module.exports = Link;

