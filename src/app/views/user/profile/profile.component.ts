import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  updateUser(user) {
    // this.activatedRoute.params.subscribe(params => {
    this.userService.updateUser(this.user._id, user).subscribe(
      (user1: User) => {
        this.user = user1;
        console.log(this.user);
      }
    );
    // });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe();
  }

  logout() {
     this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(params['userId']).subscribe(
        (user1: User) => {
          this.user = user1;
          console.log(this.user);
        }
      );
    });
  }

}
