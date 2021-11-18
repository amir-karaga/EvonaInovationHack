import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MatchesServis } from '../servisi/matches.servis';

@Component({
  selector: 'app-izbornik',
  templateUrl: './izbornik.component.html',
  styleUrls: ['./izbornik.component.css']
})
export class IzbornikComponent implements OnInit {


  selectedSportId:any;
  constructor(private http:HttpClient,private matchesServis:MatchesServis){
  }
  onSportClick(SportId:number){
    this.matchesServis.emmitSportIdSelection(SportId);
  }

  ngOnInit(){

  }
  //toogle1:boolean=true;
  //toogle2:boolean=false;
  //toogle3:boolean=false;
}
