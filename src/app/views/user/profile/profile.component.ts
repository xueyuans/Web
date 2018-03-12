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
    this.user = this.userService.updateUser(user);
    console.log(user);
    alert('update successfully');
  }

  logout() {
     this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userService.findUserById(params['userId']);
    });
    console.log(this.user);
  }

}
