module.exports = function (app) {
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname + '/../../src/assets/uploads'});

  app.get("/api/widget", findAllWidgets);
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget",reorderWidgets);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  var WIDGETS = require("./widget.mock.server.js");
  function findAllWidgets(req, res) {
    res.json(WIDGETS);
  }

  function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    if(myFile == null) {
      res.redirect("http://localhost:4200/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget");
      return;
    }

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    var foundWidget = widgets.find(function (widget) {
      return widget._id === widgetId;
    });
    foundWidget.url = "/assets/uploads/" + filename;
    res.redirect("http://localhost:4200/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
  }

  function reorderWidgets(req,res) {
    var pageId = req.params.pageId;
    var start = parseInt(req.query.start);
    var end = parseInt(req.query.end);
    var startIndex = 0;
    var endIndex = 0;
    var count = 0;
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        if (start === count) {
          startIndex = i;
        }
        if (endIndex === count) {
          endIndex = i;
        }
        count++;
      }
    }

    var changedWidget = WIDGETS[start];
    WIDGETS.splice(startIndex, 1);
    WIDGETS.splice(endIndex, 0, changedWidget);
    res.json(getWidgetForPage(pageId));
  }

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var newWidget = req.body;
    newWidget.pageId = pageId;
    WIDGETS.push(newWidget);
    var widgets = getWidgetForPage(pageId);
    res.json(widgets);
  }

  function updateWidget(req, res){
    var widgetId = req.params['widgetId'];
    var newWidget = req.body;
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS[i] = newWidget;
        break;
      }
    }
    res.json(newWidget);
  }

  function findWidgetById(req, res){
    var widgetId = req.params['widgetId'];
    res.json(getWidgetById(widgetId));
  }

  function deleteWidget(req, res){
    var widgetId = req.params['widgetId'];
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        var widget = WIDGETS[i];
        WIDGETS.splice(i, 1);
        res.json(widget);
      }
    }
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var widgets = getWidgetForPage(pageId);
    res.json(widgets);
  }

  function getWidgetById(widgetId) {
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id == widgetId) {
        return WIDGETS[i];
      }
    }
  }

  function  getWidgetForPage(pageId) {
    var widgets=[];
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }
}
