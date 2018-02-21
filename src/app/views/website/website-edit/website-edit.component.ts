import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f')  webForm: NgForm;
  webName: String;
  description: String;
  wid: String;
  userId: String;
  websites: Website[] = [];
  website: Website;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  deleteWeb() {
    this.websiteService.deleteWebsiteById(this.wid);
    alert('delete successfully');
  }

  updateWeb() {
    this.webName = this.webForm.value.webname;
    this.description = this.webForm.value.description;
    this.websiteService.updateWebsite(this.wid, new Website(this.wid, this.webName, this.userId, this.description));
    alert('update successfully');
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
