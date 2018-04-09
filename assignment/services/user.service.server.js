var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");


module.exports = function (app) {
  var userModel = require("../models/user/user.model.server");
  facebookcallbackurl = 'https://xueyuan.herokuapp.com/auth/facebook/callback';
  var facebookConfig = {
    clientID     : '639719166370363',
    clientSecret : '0564e8ae656c217ab14ff64bba889765',
    callbackURL  : facebookcallbackurl
  };

  app.get("/api/user/hello", helloUser);
  app.get("/api/user/:userId", findUserById)
  app.get("/api/user", findUsers);
  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedIn);

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/#/profile',
      failureRedirect: '/#/login'
    }));
  app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  passport.serializeUser(serializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));



  if(process.env.FACEBOOKURL) {
    facebookcallbackurl = process.env.FACEBOOKURL;
  }



  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          res.sendStatus(500).send(err);
        });
  }


  function serializeUser(user, done) {
    done(null, user);
  }

  function register(req, res) {
    var user = req.body;

    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUsername(user.username)
      .then(function (data) {
        if(data){
          res.status(400).send('Username is in use!');
          return;
        } else{
          userModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  req.login(user, function(err) {
                    if(err) {
                      res.status(500).send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })

  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.send(200); //success
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findFacebookUser(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            console.log(newFacebookUser);
            return model.userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }

  function facebookLogin(token, refreshToken, profile, done) {
    //check if the fb user already exists in our DB

    userModel
      .findFacebookUser(profile.id)
      .then(
        function (facebookUser) {
          // we arent validating, but checking if the user exists
          // only in local strategies we do validation here
          if (facebookUser) {
            return done(null, facebookUser);
          } else {
            //if th euser doesnt exist, we create here
            facebookUser = {
              username: profile.displayName.replace(/ /g, ''),
              facebook: {
                token: token,
                id: profile.id,
                displayName: profile.displayName
              }
            }
          }
          userModel
            .createUser(facebookUser)
            .then(
              function (user) {
                done(null, user);
              }
            );
        }
      );
  }




  function createUser(req, res){
    var newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password);
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
