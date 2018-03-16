module.exports = function(app){


  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findPageForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePageById);
  app.delete("/api/page/:pageId", deletePage);

  var Pages = [
    { '_id': '321', 'name': 'page321', 'websiteId': '321', 'title': "Lorem" },
    { '_id': '111', 'name': 'page111', 'websiteId': '111', 'title': 'Lorem' },
    { '_id': '222', 'name': 'page222', 'websiteId': '222', 'title': 'Lorem' },
    { '_id': '333', 'name': 'page333', 'websiteId': '333', 'title': 'Lorem' },
    { '_id': '432', 'name': 'page432', 'websiteId': '432', 'title': 'Lorem' }
  ];

  function updatePageById(req, res){
    var pageId = req.params['pageId'];
    var newPage = req.body;
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        Pages[i] = newPage;
        break;
      }
    }
    res.json(newPage);
  }

  function findPageById(req, res){
    var pageId = req.params['pageId'];
    res.json(getPageById(pageId));
  }

  function deletePage(req, res){
    var pageId = req.params['pageId'];
    for(var i = 0; i < Pages.length; i++) {
      if (Pages[i]._id === pageId) {
        var page = Pages[i];
        Pages.splice(i, 1);
        return res.json(page);
      }
    }
  }

  function createPage(req, res){
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page._id = Pages.length.toString();
    page.websiteId = websiteId;
    Pages.push(page);
    res.json(page);
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

