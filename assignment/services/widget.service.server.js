module.exports = function (app) {
  var widgetModel = require("../models/widget/widget.model.server");
  var pageModel = require("../models/page/page.model.server");

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../dist/assets/uploads' });

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
  app.get("/api/widget/:widgetId",findWidgetById);
  app.put("/api/widget/:widgetId",updateWidget);
  app.delete("/api/widget/:widgetId",deleteWidget);
  app.put("/api/page/:pageId/widget",reorderWidgets);

  //UPLOAD
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  /* pattern matching usies only base URL. it ignores anything after ?
   app.get("/api/user/:userId", findUserById);
   app.get("/api/user/:userId", findUserById);
   are the same URLs to Express!     */
  function uploadImage(req, res) {
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var position = req.body.position;

    var widgetId     = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    //Please note, you need to change the redirect url when pushing to heroku
    if(myFile == null) {
      res.redirect("https://xueyuan.herokuapp.com/#/profile/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      //res.redirect("http://localhost:4200/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      return;
    }

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;


    if (!widgetId) {
      console.log("create from server");
      var tobeCreated = {widgetType: 'IMAGE', pageId: pageId, size: 2, text: "text", width:"100%",
        url:"assets/uploads/" + filename, position: position};

      widgetModel.createWidget(pageId, tobeCreated);
      console.log(tobeCreated);
    } else {
      var foundWidget = widgetModel.findWidgetById(widgetId);
      foundWidget.url = "assets/uploads/" + filename;
      widgetModel.updateWidget(widgetId, foundWidget);
    }
    const jumpurl = "https://xueyuan.herokuapp.com/#/profile/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/";
    console.log(jumpurl)
    res.redirect(jumpurl);
  }


  function reorderWidgets(req,res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    widgetModel
      .reorderWidgets(pageId, startIndex, endIndex)
      .then(function (stats) {
        res.send(200);

      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }


  function createWidget (req,res) {
    var pageId = req.params.pageId;
    var widget = req.body;
    widgetModel.
    createWidget(pageId, widget)
      .then(function (widget) {
        res.json(widget);

      }, function (err) {
        res.sendStatus(400).send(err);
      });

  }


  function findAllWidgetsForPage (req,res) {
    var pageId = req.params.pageId;

    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
          res.json(widgets);
        });
  }
  function findWidgetById (req,res) {
    var widgetId  = req.params.widgetId;

    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
          res.json(widget);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });

  }
  function updateWidget (req,res) {

    var widgetId  = req.params.widgetId;
    var widget = req.body;

    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });



  }
  function deleteWidget (req,res) {
    var widgetId  = req.params.widgetId;
    var pageId = req.query.pageId;
    widgetModel
      .deleteWidget(widgetId)
      .then (function (stats) {
          console.log(stats);
          res.send(200);
        },
        function (err) {
         console.log(err);
          res.sendStatus(404).send(err);
        });
  }
}
