import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {_id: '', username: '', password: '', firstname: '', lastname: ''};
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  updateUser() {

    this.userService.updateUser(this.user._id, this.user).subscribe(
      (user: any) => {
        alert('update successfully');
      }
    );

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
        (data: any) => {
          this.user = data;
          console.log(this.user);
        }
      );
    });
  }

}
