module.exports = function (app) {
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  //app.get("/api/user", findAllUsers);
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.delete("/api/user/:userId", deleteUser)
  app.put("/api/user/:userId", updateUserById)


  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  function updateUserById(req, res){
    var userId = req.params['userId'];
    var newUser = req.body;
    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i] = newUser;
        break;
      }
    }
    res.json(newUser);
  }

  function deleteUser(req, res){
    var userId = req.params['userId'];
    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.splice(i, 1);
        return;
      }
    }
  }

  function createUser(req, res){
    var user = req.body;
    user._id = users.length + "";
    users.push(user);
    res.json(users);
  }



  function helloUser(req, res) {
    res.send("Hello from user service!");
  }



  function findUserById(req, res){
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }
  function findAllUsers(req, res){
    res.json(users);
  }

  function findUsers(req, res){
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password){
      var user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user){
        res.json(user);
      } else {
        res.json({});
      }
    } else if (username){
      var user = users.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.json(user);
      } else {
        res.json({});
      }
      return;
    }
    res.json(users);
  }

}
