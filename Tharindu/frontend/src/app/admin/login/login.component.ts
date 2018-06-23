import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  constructor(private userService: UserService,private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    const user ={
      email: this.email,
      password: this.password
    }

    this.userService.loginUser(user).subscribe((res:any)=>{
      if(res.state) {
        this.userService.storeData(res.token, res.user);
        this.flashMessage.show("You are Loggedd In" , {cssClass: 'alert-success', delay: 1000});
        this.router.navigate(['/admin']);
      }

      else{
        this.flashMessage.show(res.msg, {cssClass: 'alert-danger', delay: 1000});
        this.router.navigate(['/adminlogin']);
      }
    });
  }

}
