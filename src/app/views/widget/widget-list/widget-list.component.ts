import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets: Widget[] = [];
  pageID: String;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService,  private domSanitizer: DomSanitizer) { }

  getURL(url: String) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageID)
      .subscribe(
        (data) => console.log(data)
      );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.pageID = params['pid'];
      }
    );

    this.widgetService.findWidgetsByPageId(this.pageID).subscribe(
      (widgets: Widget[]) => {
        this.widgets = widgets;
        console.log(this.widgets);
      }
    );
  }

}
