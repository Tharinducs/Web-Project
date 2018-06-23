import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user.service';
import {Router} from "@angular/router";
import {ReservationService} from '../../shared/reservation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

//
import { Reservation } from '../../shared/reservation';
// import {AlertService} from "ngx-alerts";


@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css'],
  providers: [UserService,ReservationService]
})
export class AdminpannelComponent implements OnInit {

  constructor(private userService: UserService,private router: Router, private reservationService: ReservationService, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    if(this.userService.loggedIn()) {
      this.userService.getProfile().subscribe(res => {
        console.log(res)
      })
    }

    this.getNotConfirmedReservations();
  }

  logoutUser(){
    this.userService.logout();
    this.router.navigate(['/adminlogin']);
  }

  getNotConfirmedReservations(){
    this.reservationService.getNotConfirmedReservationList().subscribe( (res) => {
      this.reservationService.reservations = res as Reservation[];
    });
  }

  confirm(id){
    this.reservationService.confirm(id).subscribe( (res) => {
      this.flashMessage.show("Succesfully confirmed" , {cssClass: 'alert-succes', delay: 1000});
      this.getNotConfirmedReservations();
      // this.router.navigate(['/admin']);
    });
  }

  remove(id){
    this.reservationService.remove(id).subscribe( (res) => {
      this.flashMessage.show("Succesfully removed" , {cssClass: 'alert-danger', delay: 1000});
      this.getNotConfirmedReservations();

    });
  }

}
