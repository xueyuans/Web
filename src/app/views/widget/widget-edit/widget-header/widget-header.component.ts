import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  name: String;
  text: String;
  size;
  wgid: String;
  pageId: String;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  delete() {
    this.widgetService.deleteWidgetByWidgetId(this.wgid);
    alert('delete successful');
  }

  update() {
    this.name = this.widgetForm.value.headName;
    this.text = this.widgetForm.value.text;
    this.size = this.widgetForm.value.size;
    this.widgetService.updateWidget(this.wgid, new Widget(this.wgid, 'HEADER', this.pageId, this.size, this.text));
    alert('update successfully');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['wgid']);
      this.wgid = params['wgid'];
    });

    this.activatedRoute.params.subscribe(params => {
      console.log(params['pid']);
      this.pageId = params['pid'];
    });
  }

}
