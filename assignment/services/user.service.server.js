module.exports = function (app) {

  var userModel = require("../models/user/user.model.server");

  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);


  function createUser(req, res){
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function(user){
        res.json(user);
      })
  }

  function findUserByUsername(username, res) {
    userModel
      .findUserByUsername(username)
      .then(function (user) {
          res.json(user);
        },
        function (err) {
          res.statusCode(404).send(err);
        });
  }

  function updateUser(req, res) {
    var userId = req.params.userId;
    var user = req.body;

    userModel
      .updateUser(userId, user)
      .then(function (stats) {
          res.send(200);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }


  function helloUser(req, res) {
    res.send("Hello from user service!");
  }

  function findUserById(req, res){
    var userId = req.params["userId"]
    userModel.findUserById(userId).then(function (user){
      res.json(user);
    })
  }


  function findUsers(req, res){
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password){
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
        //console.log(user);
      })
      return;
    } else if (username){
      userModel.findUserByUserName(username)
        .then(function(user){
          res.json(user);
        })
      return;
    }
  }

  function deleteUser(req, res) {
    var userId = req.params.userId;

    userModel
      .deleteUser(userId)
      //responds with some stats
      .then(function (stats) {
          res.send(200);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }

}
