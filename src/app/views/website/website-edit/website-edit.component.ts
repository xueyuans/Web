import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f')  webForm: NgForm;
  wid: String;
  user = {};
  userId: String;
  websites = [{_id: '', name: '', description: ''}];
  website: {_id: '', name: '', description: ''};
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) { }

  deleteWeb() {
    this.websiteService.deleteWebsite(this.website._id).subscribe(
      (website: any) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  updateWeb() {
    this.websiteService.updateWebsite(this.website._id, this.website).subscribe(
      (website: any) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        console.log(this.website);
      }
    );
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
    this.websiteService.findWebsitesByUser(this.userId).subscribe(
      (websites) => {
        this.websites = websites;
      }
    );
    this.activatedRoute.params.subscribe(
      (params: any) => {
      this.wid = params['wid'];
    });

    this.websiteService.findWebsiteById(this.wid).subscribe(
      (website: any) => {
        this.website = website;
        console.log(this.website);
     }
    );
  }


}
