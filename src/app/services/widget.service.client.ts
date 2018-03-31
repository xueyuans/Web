import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class WidgetService {
  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  reorderWidgets(startIndex, endIndex, pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this.http.put(url, '')
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }

  createWidget(pageId: String, widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }

  findWidgetsByPageId(pageId: String) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map((res: Response) => {
        return res.json();
      });
  }
  findWidgetById(widgetId: String) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateWidget(widgetId: String, widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }

  deleteWidget(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }

}
