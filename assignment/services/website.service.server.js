module.exports = function(app){
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);
  app.delete("/api/website/:websiteId", deleteWebsite);

  var websiteModel = require("../models/website/website.model.server");
  function createWebsite(req,res) {


    var userId = req.params.userId;
    var website = req.body;

    console.log("request received to create a website ", userId, website);

    websiteModel
      .createWebsiteForUser(userId, website)
      .then (function (website) {
          res.json(website);
        },
        function (err) {
          res.sendStatus(400).send(err);
        });

  }


  function findWebsiteForUser(req,res) {
    var userId = req.params.userId;

    websiteModel
      .findAllWebsitesForUser(userId)
      .then(function (websites) {
          res.json(websites);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });

  }

  function findWebsiteById(req, res) {
    var websiteId = req.params.websiteId;

    websiteModel
      .findWebsiteById(websiteId)
      .then(function (website) {
          res.json(website);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function updateWebsiteById(req,res) {
    var websiteId = req.params.websiteId;
    var website  = req.body;
    websiteModel
      .updateWebsite(websiteId, website)
      .then (function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function deleteWebsite(req,res) {
    var websiteId = req.params.websiteId;

    websiteModel
      .deleteWebsite(websiteId)
      .then (function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });

  }
}
