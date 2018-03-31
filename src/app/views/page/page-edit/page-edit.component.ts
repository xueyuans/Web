import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  pageID: String;
  page = {name: '', title: ''};
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  deletePage() {
    this.pageService.deletePage(this.pageID).subscribe(
      (page: any) => {
        this.page = page;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  updatePage() {
    this.pageService.updatePage(this.pageID, this.page).subscribe(
      (page: any) => {
        this.page = page;
        // alert('update successfully');
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('pid'));
      this.pageID = params.get('pid');
    });

    this.pageService.findPageById(this.pageID).subscribe(
      (page: any) => {
        this.page = page;
      }
    );
  }
}
