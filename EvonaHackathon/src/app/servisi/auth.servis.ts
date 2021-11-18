import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  public loginStatus:any;

   constructor(private http: HttpClient) {
  }

  loginUpdateSubject = new Subject();

  returnSubject (){
    return this.loginUpdateSubject.asObservable();
  }

    triggerLogin (status:boolean){
      this.loginUpdateSubject.next(status);
      this.loginStatus = status;
    }

  Login(username : string, password : string) {
   var body = `grant_type=password&username=${username}&password=${password}&client_id=20892ccf14bd4ef0b276a7226bef8a6d&terminal_type=2`;
    return this.http.post('https://stageapis.bet-x.eu/authapi/token', body, {headers: this.header});
  }

}
