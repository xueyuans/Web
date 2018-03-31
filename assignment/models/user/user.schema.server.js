var mongoose = require("mongoose");
var WebsiteSchema = require('../website/website.schema.server');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstname:String,
  lastname: String,
  websites:[WebsiteSchema],
}, {collection:'user'});

module.exports = UserSchema;
