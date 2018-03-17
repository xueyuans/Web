import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  wgid: String;
  pageID: String;
  widget: Widget;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  delete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      (widget: Widget) => {
        this.widget = widget;
        alert('delete successfully');
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  update() {
    if (this.wgid === undefined) {
      this.widgetService.createWidget(this.pageID, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          alert('create successfully');
        }
      );
    } else {
      this.widgetService.updateWidget(this.wgid, this.widget).subscribe(
        (widget: Widget) => {
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
      }
    );
    this.activatedRoute.params.subscribe(params => {
      this.wgid = params['wgid'];
    });
    if (this.wgid === undefined) {
      this.widget = new Widget('', 'HTML', this.pageID, '', '', '', '');
    } else {
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
    }
  }


}
