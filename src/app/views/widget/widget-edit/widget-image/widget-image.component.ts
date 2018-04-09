import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';

import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  pageID: string;
  userId: String;
  wgid: String;
  widget = {_id: undefined, name: '', widgetType: '', pageId: '', width: '', url: '', text: '', position: undefined};
  baseUrl: String;
  websiteId: String;
  widgets: any[];
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {}

  upload() {
    if (this.wgid === undefined) {
      this.widget.position = this.widgets.length;
      this.widgetService.createWidget(this.pageID, this.widget).subscribe(
        (widget: any) => {
          this.widget = widget;
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          alert('create successfully');
        }
      );
    } else {
      this.widgetService.updateWidget(this.wgid, this.widget).subscribe(
        (widget: any) => {
          this.widget = widget;
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          alert('update successfully');
        }
      );
    }
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      () => {
        alert('delete successfully');
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log(params['pid']);
        this.pageID = params['pid'];
      }
    );

    this.activatedRoute.params.subscribe(params => {
      this.wgid = params['wgid'];
      this.userId = params['userId'];
      this.websiteId = params['wid'];
      this.widgetService.findWidgetsByPageId(this.pageID).subscribe(
        (widgets: any[]) => {
          this.widgets = widgets;
          console.log(this.widgets);
        }
      );
    });
    if (this.wgid === undefined) {
      this.widget.widgetType = 'IMAGE';
      this.widget.pageId = this.pageID;
    } else {
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget: any) => {
          this.widget = widget;
          console.log(this.widget);
        }
      );
    }
  }


}
