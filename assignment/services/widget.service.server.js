module.exports = function (app) {
  app.get("/api/widget", findAllWidgets);
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  var WIDGETS = require("./widget.mock.server.js");
  function findAllWidgets(req, res) {
    res.json(WIDGETS);
  }

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var newWidget = req.body;
    newWidget.pageId = pageId;
    WIDGETS.push(website);
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
    res.json(getWebsiteById(widgetId));
  }

  function deleteWidget(req, res){
    var widgetId = req.params['widgetId'];
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS.splice(i, 1);
        return;
      }
    }
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.param();
    var widgets = getWidgetForPage(pageId);
    res.json(widgets);
  }
  function getWebsiteById(widgetId) {
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].widgetId == widgetId) {
        return WIDGETS[i];
      }
    }
  }

  function  getWidgetForPage(pageId) {
    var widgets=[];

    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].developerId === userId) {
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }
}
