import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment.prod';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';

@Injectable()
export class UserService {

  constructor(private http: Http, private router: Router, private sharedService: SharedService) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          console.log(user !== 0);
          if (user !== 0) {
            console.log(user);
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  login(username: String, password: String) {

    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  register(username: String, password: String) {

    this.options.withCredentials = true;
    const body = {
      username : username,
      password : password
    };

    return this.http.post(this.baseUrl + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  hello() {
    return this.http.get(this.baseUrl + '/api/user/hello');
  }

  createUser(user) {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/user', user, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserByCredential(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }

  updateUser(userId: String, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map(
        (res: Response) => {
        return 'update';
      });
  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }
}
