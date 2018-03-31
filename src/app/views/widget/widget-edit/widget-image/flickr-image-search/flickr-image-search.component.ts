import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  websiteId: any;
  pageId;
  userId: any;
  widgetId: String;
  photos: [any];
  searchText: any;
  widgets: [{}];
  widget = {name: '', size: '2', widgetType: 'IMAGE', pageId: '', width: '', url: '', text: '', position: undefined};

  constructor(private flickrService: FlickrService, private widgetService: WidgetService, private router: Router,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }


  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget.url = url;
    console.log(this.widgetId === undefined);
    if (this.widgetId === 'undefined') {
      this.widget.position = this.widgets.length;
      console.log(this.widget.position);
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: any) => {
          this.widget = widget;
          alert('create successfully');
          this.router.navigate(['../../'], {relativeTo: this.activatedRoute});

        }
      );
    } else {
      console.log('thank you');
      this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
        (widget: any) => {
          this.widget = widget;
          alert('update successfully');
          this.router.navigate(['../../'], {relativeTo: this.activatedRoute});

        }
      );
    }
  }

  ngOnInit() {
    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgetService.findWidgetsByPageId(this.pageId).subscribe(
            (widgets: any) => {
              this.widgets = widgets;
              console.log(this.widgets);
            }
          );
        }
      );

    if (this.widgetId === undefined) {
      this.widget.pageId = this.pageId;
    } else {
      this.widgetService.findWidgetById(this.widgetId).subscribe(
        (widget: any) => {
          this.widget = widget;
        }
      );
    }
  }
}
