import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { tokenNotExpired } from 'angular2-jwt';


import {User} from "./user";


@Injectable()
export class UserService {
  user: any;
  authToken: any;
  // readonly baseURL = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  registerUser(user: User){
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/user/register', user, {headers: headers});

  }

  loginUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/login', user, {headers: headers});

  }

  storeData(token, user){
    localStorage.setItem("tokenid", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile(){


    this.fetchToken();

    let headers = new HttpHeaders();
    headers=headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3000/user/profile",{headers:headers})

  }

  fetchToken(){

    const token = localStorage.getItem("tokenid");
    this.authToken = token;

  }

  logout(){
    this.authToken=null;
    this.user =null;
    localStorage.clear();
  }

  loggedIn(){
    return tokenNotExpired('tokenid');
  }



}
