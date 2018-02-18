import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f')  pageForm: NgForm;
  pageName: String;
  websiteId: String;
  title: String;
  constructor(private pageService: PageService, private activeRoute: ActivatedRoute, private router: Router) { }

  create() {
    console.log('success');
    this.pageName = this.pageForm.value.pagename;
    this.title = this.pageForm.value.title;

    const page: Page = new Page(this.pageService.pages.length, this.pageName, this.websiteId, this.title);
    this.pageService.createWebsite(this.websiteId, page);

    this.router.navigate(['..']);
  }


  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: any) => {

        console.log(params['wid']);
        this.websiteId = params['wid'];

      });
  }

}
