import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-edit1',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: String;
  widget = {widgetType: ''};
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wgid = params['wgid'];
    });
    this.widgetService.findWidgetById(this.wgid).subscribe(
      (widget: any) => {
        this.widget = widget;
        console.log(this.widget);
      }
    );
  }
}
