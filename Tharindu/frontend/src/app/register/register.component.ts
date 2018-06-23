import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../shared/user.service";
import {User} from "../shared/user";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User = new User();
  username: string;
  name: string;
  email: string;
  password: string;
  constructor(
    private userService: UserService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerData(){
    this.user.username=this.username;
    this.user.name=this.name;
    this.user.email=this.email;
    this.user.password=this.password;

    this.userService.registerUser(this.user).subscribe(res=>{
      this.flashMessage.show('You are succesfully registerded', {cssClass: 'alert-success' ,delay:1000});
      this.router.navigate(['/adminlogin'])
    });
  }


}
