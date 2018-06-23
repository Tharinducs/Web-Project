import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Reservation} from "./reservation";

@Injectable()
export class ReservationService {
  public selectedReservation: Reservation = new Reservation();
  public  reservations: Reservation[];
  constructor(private http: HttpClient) { }

  getNotConfirmedReservationList(){
    return this.http.get('http://localhost:3000/reservation/notComfirmed');
  }

  confirm(_id: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/confirm',{_id} , {headers: headers});
  }

  remove(_id: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reservation/remove',{_id} , {headers: headers});
  }

  getallReservationList(){
    return this.http.get('http://localhost:3000/reservation');
  }

}
