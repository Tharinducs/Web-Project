import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user.service';
import {Router} from "@angular/router";
import {ReservationService} from '../../shared/reservation.service';
import {Reservation} from "../../shared/reservation";

@Component({
  selector: 'app-allreservation',
  templateUrl: './allreservation.component.html',
  styleUrls: ['./allreservation.component.css'],
  providers: [UserService,ReservationService]
})
export class AllreservationComponent implements OnInit {

  constructor(private userService: UserService,private router: Router, private reservationService: ReservationService) { }

  ngOnInit() {
    this.getallReservations();
  }

  logoutUser(){
    this.userService.logout();
    this.router.navigate(['/adminlogin']);
  }

  getallReservations(){
    this.reservationService.getallReservationList().subscribe( (res:any) => {
      this.reservationService.reservations = res as Reservation[];
      console.log(res);
    });
  }


}
