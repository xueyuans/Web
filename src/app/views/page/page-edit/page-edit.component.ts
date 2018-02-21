import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f')  pageForm: NgForm;
  pageName: String;
  websiteId: String;
  title: String;
  pageID: String;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  deletePage() {
    this.pageService.deleteWebsite(this.pageID);
    alert('delete successful');
    this.router.navigate(['..']);
  }

  updatePage() {
    this.pageName = this.pageForm.value.pagename;
    this.title = this.pageForm.value.title;
    this.pageService.updatePage(this.pageID, new Page(this.pageID, this.pageName, this.websiteId, this.title));
    alert('update successfully');
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('pid'));
      this.pageID = params.get('pid');
    });

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('wid'));
      this.websiteId = params.get('wid');
    });
  }

}
