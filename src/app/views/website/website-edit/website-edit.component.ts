import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  wid: String;
  userId: String;
  websites: Website[] = [];
  website: Website;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  deleteWeb() {
    this.websiteService.deleteWebsite(this.wid);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log(params['userId']);
        this.userId = params['userId'];
      }
    );
    this.websites = this.websiteService.findWebsitesByUser2(this.userId);
    console.log(this.websites);

    this.activatedRoute.params.subscribe(
      (params: any) => {
      console.log(params['wid']);
      this.wid = params['wid'];
    });
    this.website = this.websiteService.findWebsitesById(this.wid);
    console.log(this.website);
  }


}
