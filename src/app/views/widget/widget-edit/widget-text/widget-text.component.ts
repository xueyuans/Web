import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  wgid: String;
  pageID: string;
  widget = {name: '', widgetType: '', pageId: '', text: '', rows: undefined, placeholder: undefined,
    formatted: undefined, position: undefined};
  websiteId: String;
  userId: String;
  widgets: any[];
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  delete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      (widget: any) => {
        this.widget = widget;
        alert('delete successfully');
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  update() {
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
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageID = params['pid'];
        this.websiteId = params['wid'];
        this.userId = params['userId'];
        this.widgetService.findWidgetsByPageId(this.pageID).subscribe(
          (widgets: any[]) => {
            this.widgets = widgets;
            console.log(this.widgets);
          }
        );
      }
    );
    this.activatedRoute.params.subscribe(params => {
      this.wgid = params['wgid'];
    });
    if (this.wgid === undefined) {
      this.widget.widgetType = 'TEXT';
      this.widget.pageId = this.pageID;
    } else {
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget: any) => {
          this.widget = widget;
        }
      );
    }
  }

}
