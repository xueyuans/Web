import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: String;
  firstName: String;
  lastName: String;
  email: String;
  user = {};
  userId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';


  constructor(private _UserService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this._UserService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  getUser() {
    this.user = this.sharedService.user;
    console.log(this.user);
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
  }


  updateUser() {
    const updatedUser = {
      _id : this.userId,
      username : this.username,
      firstName: this.firstName,
      lastName :  this.lastName,
      email : this.email
    };

    this._UserService.updateUser(this.userId, updatedUser)
      .subscribe(
        (data: any) => {
          alert('update successfully');
        },
        (error: any) => this.errorFlag = true
      );

  }
}
