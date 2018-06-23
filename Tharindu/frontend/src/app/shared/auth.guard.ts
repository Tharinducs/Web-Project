import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    console.log(this.userService.loggedIn());
    if(this.userService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/adminlogin']);
      return false;
    }
  }
}
