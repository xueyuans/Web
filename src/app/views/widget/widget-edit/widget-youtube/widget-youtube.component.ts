import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  pageID: string;
  wgid: String;
  widgets: any[];
  widget = {_id: undefined, name: '', widgetType: '', pageId: '', width: '', url: '', text: '', position: undefined};
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  update () {
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

  delete () {
    const widget = this.widgetService.deleteWidget(this.wgid).subscribe(
      () => {
        alert('delete successfully');
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log(params['pid']);
        this.pageID = params['pid'];
        this.widgetService.findWidgetsByPageId(this.pageID).subscribe(
          (widgets: any[]) => {
            this.widgets = widgets;
            console.log(this.widgets);
          }
        );
      }
    );

    this.activatedRoute.params.subscribe(params => {
      console.log(params['wgid']);
      this.wgid = params['wgid'];
    });

    if (this.wgid === undefined) {
      this.widget.widgetType = 'YOUTUBE';
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
