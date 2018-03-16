import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pwErrorFlag: boolean;
  pwErrorMsg = 'Password should be same';
  userErrorFlag: boolean;
  userErrorMsg = 'Already Exist this userName';
  verifyPw: String;
  user: User;
  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.user._id = this.userService.users.length.toString();
    this.userService.createUser(this.user).subscribe(
      (user: User) => {
        this.user = user;
        console.log(this.user);
        // alert('create successfully');
      }
    );
    this.router.navigate(['/profile', this.user._id]);
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.user = this.userService.dumpUser();
  }

}
