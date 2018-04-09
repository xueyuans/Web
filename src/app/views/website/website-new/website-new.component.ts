import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  user = {};
  userId: String;
  websites = [{_id: '', name: '', description: ''}];
  website = {_id: '', name: '', description: ''};


  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) { }

  createWeb() {
    this.websiteService.createWebsite(this.userId, this.website).subscribe(
      (website: any) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteService.findWebsitesByUser(this.userId).subscribe(
          (websites: any) => {
            this.websites = websites;
          }
        );
      }
    );
  }


}
