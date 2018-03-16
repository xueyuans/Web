module.exports = function(app){



  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findWebsiteForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsiteById);
  app.delete("/api/website/:websiteId", deleteWebsite);

  var WEBSITES = [
    {"_id": "321", "name": "Facebook", developId: "123"},
    {"_id": "432", "name": "Twitter", developId: "234"},
    {"_id": "234", "name": "Amazon", developId: "345"},
    {"_id": "333", "name": "MyWebSite", developId: "123"}
  ];

  function updateWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES[i] = newWebSite;
        break;
      }
    }
    res.json(newWebSite);
  }

  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }

  function deleteWebsite(req, res){
    var websiteId = req.params['websiteId'];
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        var website = WEBSITES[i];
        WEBSITES.splice(i, 1);
        res.json(website);
      }
    }
  }

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    website._id = (new Date()).getTime() + "";
    website.developId = userId;
    WEBSITES.push(website);
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }

  function findWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    var websites= getWebsitesForUserId(userId);
    res.json(websites);
  }

  function  getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }
}
