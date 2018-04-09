var mongoose = require("mongoose");
var WebsiteSchema = require('../website/website.schema.server');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstname:String,
  lastname: String,
  websites:[WebsiteSchema],
  email : String,
  facebook : {
    token: String,
    id: String,
    displayName : String
  },
  dateCreated : {type: Date, default : Date.now}
}, {collection:'user'});

module.exports = UserSchema;
