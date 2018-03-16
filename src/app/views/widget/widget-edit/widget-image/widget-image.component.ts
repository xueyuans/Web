import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  pageID: String;
  wgid: String;
  widget: Widget;
  baseUrl: String;
  userId: String;
  websiteId: String;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {}

  upload() {
    if (this.wgid === undefined) {
      this.widget._id = this.widgetService.widgets.length.toString();
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
    });
    if (this.wgid === undefined) {
      this.widget = new Widget('', 'IMAGE', this.pageID, '', '', '', '');
    } else {
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          console.log(this.widget);
        }
      );
    }
  }


}
