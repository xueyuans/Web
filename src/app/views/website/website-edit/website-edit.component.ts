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
  wid: String;
  userId: String;
  websites: Website[] = [];
  website: Website;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  deleteWeb() {
    this.websiteService.deleteWebsite(this.website._id).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  updateWeb() {
    this.websiteService.updateWebsite(this.website._id, this.website).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        console.log(this.website);
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );
    this.websiteService.findWebsitesByUser(this.userId).subscribe(
      (websites: Website[]) => {
        this.websites = websites;
      }
    );
    this.activatedRoute.params.subscribe(
      (params: any) => {
      this.wid = params['wid'];
    });

    this.websiteService.findWebsiteById(this.wid).subscribe(
      (website: Website) => {
        this.website = website;
        console.log(this.website);
     }
    );
  }


}
