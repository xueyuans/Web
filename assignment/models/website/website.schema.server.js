var mongoose = require('mongoose');

var WebsiteSchema = mongoose.Schema({
  name: String,
  description: String,
  visitCount: Number,
  _user : {type : mongoose.Schema.Types.ObjectId, ref: "User"},
  pages:[{type : mongoose.Schema.Types.ObjectId, ref: "Page"}],
}, {collection: 'website'})

module.exports = WebsiteSchema;
