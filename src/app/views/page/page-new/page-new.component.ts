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


  websiteId: String;
  page: Page;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  createPage() {
    this.pageService.createPage(this.websiteId, this.page).subscribe(
      (page: Page) => {
        this.page = page;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        console.log(this.page);
      }
    );
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['wid'];
      });
    this.page = this.pageService.dumpPage();
  }

}
