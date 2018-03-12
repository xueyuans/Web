module.exports = function(app){
  var Pages = require("./website.mock.server");

  app.get("/api/user/:userId/website/:websiteId/page", findPageForWebsite);
  app.post("/api/user/:userId/website/:websiteId/page", createPage);
  app.delete("/api/user/:userId/website/:websiteId/page/:pageId", deletePage);
  app.get("/api/user/:userId/website/:websiteId/page/:pageId", findPageById);
  app.put("/api/user/:userId/website/:websiteId/page/:pageId", updatePageById);

  function updatePageById(req, res){
    var websiteId = req.params['websiteId'];
    var pageId = req.params['pageId'];
    var newPage = req.body;
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        Pages[i] = newPage;
        break;
      }
    }
    res.json(getPagesForWebsiteId(websiteId));
  }

  function findPageById(req, res){

    var websiteId = req.params['websiteId'];
    var pageId = req.params['pageId'];
    res.json(getPageById(pageId));
  }

  function deletePage(req, res){
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        Pages.splice(i, 1);
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
  }

  function createPage(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId;
    Pages.push(page);
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function findPageForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var pages= getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function  getPagesForWebsiteId(websiteId) {
    var pages=[];

    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i].websiteId === websiteId) {
        pages.push(Pages[i]);
      }
    }
    return pages;
  }

  function getPageById(pageId){
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        return Pages[i];
      }
    }
  }
}

