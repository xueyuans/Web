import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') YoutubeForm: NgForm;
  pageID: String;
  width: String;
  name: String;
  text: String;
  url: String;
  widget: Widget;
  widgetId: String;
  delete() {
    this.widgetService.deleteWidgetByWidgetId(this.widgetId);
    alert('delete successfully');
  }

  update() {
    this.name = this.YoutubeForm.value.name;
    this.width = this.YoutubeForm.value.width;
    this.text = this.YoutubeForm.value.text;
    this.url = this.YoutubeForm.value.url;
    this.widgetService.updateWidget(this.widgetId, new Widget(this.widgetId, 'YOUTUBE', this.pageID,
      '', this.text.toString(), this.width.toString(), this.url.toString()));
    alert('update successfully');
  }

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['wgid']);
      this.widgetId = params['wgid'];
    });

    this.activatedRoute.params.subscribe(params => {
      console.log(params['pid']);
      this.pageID = params['pid'];
    });
  }

}
