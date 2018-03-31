var mongoose = require ("mongoose");
  var WidgetSchema = require("./widget.schema.server")();
  var Widget =  mongoose.model("Widget", WidgetSchema); //mongo plurarizes

var PageSchema = require("../page/page.schema.server")();
var PageMoel = require("../page/page.model.server")();

Widget.findAllWidgetsForPage = findAllWidgetsForPage;
Widget.updateWidget = updateWidget;
    Widget.createWidget = createWidget;
    Widget.findWidgetById = findWidgetById;
    Widget.deleteWidget = deleteWidget;
    Widget.reorderWidgets = reorderWidgets;
    Widget.updatePosition = updatePosition;

module.exports = Widget

  function updatePosition (pageId, position) {
    return Widget.find({_page:pageId}, function (err, widgets) {
      widgets.forEach (function (widget) {
        if(widget.position > position){
          widget.position--;
          widget.save();
        }
      })
    })
  }

  function reorderWidgets(pageId, startIndex, endIndex) {
    return Widget.find({_page:pageId}, function (err,widgets) {
      widgets.forEach (function (widget) {
        if(startIndex < endIndex){
          if(widget.position === startIndex){
            widget.position = endIndex;
            widget.save();
          }else if (widget.position > startIndex
            && widget.position <= endIndex){
            widget.position --;
            widget.save();
          }else {
            if(widget.position === startIndex){
              widget.position = endIndex;
              widget.save();
            } else if(widget.position < startIndex
              && widget.position >= endIndex){
              widget.position ++;
              widget.save();
            }
          }
        }
      })
    })
  }


  function findAllWidgetsForPage(pageId) {

    return Widget.find({_page: pageId});
  }

  function updateWidget(widgetId, widget) {
     return Widget.findOneAndUpdate({_id: widgetId}, widget);
  }

  function createWidget(pageId, widget)  {
    widget._page = pageId;
    return Widget.create(widget);

  }

  function findWidgetById(widgetId) {
    return Widget.findById (widgetId);
  }

  function deleteWidget(widgetId) {
    return Widget.remove({_id: widgetId});
  }


