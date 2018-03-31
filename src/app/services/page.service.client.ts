import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment.prod';
@Injectable()

export class PageService {

  baseUrl = environment.baseUrl;

  constructor(private _http: Http) {
  }


  createPage(websiteId, page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';

    return this._http.post(url, page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageByWebsiteId(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this._http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageById(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this._http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updatePage(pageId, page) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this._http.put(url, page)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }

  deletePage(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this._http.delete(url)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }

}
