import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') webForm: NgForm;
  userId: String;
  webname: String;
  description: String;
  websites: Website[];
  website: Website;


  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  createWeb() {
    this.webname = this.webForm.value.webname;
    this.description = this.webForm.value.description;
    this.website = new Website(this.websiteService.websites.length.toString(), this.webname, this.userId, this.description);
    this.websiteService.createWebsite(this.userId, this.website).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteService.findWebsitesByUser(this.userId).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          }
        );
      }
    );
  }


}
