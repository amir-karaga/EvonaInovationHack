import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servisi/auth.servis';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
ulogovan: boolean=true;
  constructor(private authservis:AuthService,private router:Router) { }
 isLoggedIn:any=false;

 ngOnInit(): void {
  this.isLoggedIn=localStorage.getItem("token");
}
Name:string="football";
logout(){
  localStorage.removeItem("token");
  this.isLoggedIn=false;
  this.router.navigate(["/offers"]);
}

  toggleUlogovan(){
    this.ulogovan= !this.ulogovan;
  }



}
