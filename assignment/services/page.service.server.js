module.exports = function(app){

  var pageModel = require("../models/page/page.model.server");
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
  app.get("/api/page/:pageId",findPageById);
  app.put("/api/page/:pageId",updatePage);
  app.delete("/api/page/:pageId",deletePage);

  /* pattern matching usies only base URL. it ignores anything after ?
   app.get("/api/user/:userId", findUserById);
   app.get("/api/user/:userId", findUserById);
   are the same URLs to Express!     */

  function createPage(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;
    page._website= websiteId;
    console.log(page);
    pageModel
      .createPage(websiteId, page)
      .then(function (page) {
        res.json(page);});
  }

  function findAllPagesForWebsite(req,res) {
    var websiteId = req.params.websiteId;

    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function (pages) {
          res.json(pages);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }
  function updatePage(req,res) {
    var pageId = req.params.pageId;
    var page = req.body;

    pageModel
      .updatePage(pageId, page)
      .then(function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }
  function findPageById(req,res ) {
    var pageId = req.params.pageId;
    pageModel
      .findPageById(pageId)
      .then(function (page) {
          res.json(page);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function deletePage(req,res) {
    var pageId = req.params.pageId;
    pageModel
      .deletePage(pageId)
      .then (function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
    // for (var i in pages){
    //     if (pages[i]._id === pageId){
    //         pages.splice(i,1);
    //         res.send(200);
    //     }
    // }
    // res.send(400);
  }
}

