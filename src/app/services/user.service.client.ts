import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'qq'),
    new User('234', 'bob', 'qq'),
    new User('345', 'charlie', 'qq')
  ];
  constructor(private http: Http) {}
  baseUrl = environment.baseUrl;
  dumpUser() {
    return new User(undefined, undefined, undefined);
  }

  hello() {
    return this.http.get(this.baseUrl + '/api/user/hello');
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + '/api/user', user)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserByCredential(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateUser(userId: String, user: User) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }
}
