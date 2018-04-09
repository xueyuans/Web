var mongoose = require ("mongoose");
var UserSchema = require("./user.schema.server");

var UserModel =  mongoose.model("User", UserSchema);

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser=deleteUser;
UserModel.findFacebookUser=findFacebookUser;

//helper functions -- delete after testing
UserModel.findAllUsers = function (){
  return UserModel.find();
}

module.exports = UserModel;

function findFacebookUser(id) {
  return UserModel.findOne({"facebook.id": id});
}

function findUserById(userId) {
  return UserModel.findById({_id: userId});
}


function findUserById(userId) {
  return UserModel.findById({_id: userId});
}

function findUserByUsername(username) {
  return UserModel
    .findOne({username: username});
}

function updateUser(userId, user){
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

//findOne returns only One (first one for multiple results)
function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function createUser(user){
  console.log(user);
  return  UserModel.create(user);
}
