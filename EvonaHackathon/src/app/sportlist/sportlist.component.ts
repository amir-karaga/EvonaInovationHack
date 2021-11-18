import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatchesServis } from '../servisi/matches.servis';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})
export class SportlistComponent implements OnInit {
  post={};
  selectedSports:any[]=[];


  readonly ROOT_URL = 'https://stageapis.bet-x.eu/SportOfferApi/api/sport/offer/v3/matches/live';

  sports: any[] = [];

  constructor(private http:HttpClient,private matchesServis:MatchesServis){
    this.http.get(this.ROOT_URL).subscribe(s=>{
      this.sports = s as any;
      console.log("Ovo je post",this.sports);this.selectSport(-1);
      this.selectSport(-1);
    });
  }
  mappedArray = [];

  ngOnInit() {
    this.matchesServis.listenForSportIdSelection().subscribe(res=>{
      this.selectSport(res as number);
    });
  }

  selectSport(sportId:number){
    if(sportId!==-1){
      let s:any = this.sports.find(e=>{if(e.Id === sportId)return e;})
      console.log(s);
      this.selectedSports = [s];
    }else{
      this.selectedSports = this.sports;
    }
  }
}
