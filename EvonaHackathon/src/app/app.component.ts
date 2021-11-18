import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Evona u srcu <3';
  post={};

  readonly ROOT_URL = 'https://stageapis.bet-x.eu/SportOfferApi/api/sport/offer/v3/matches/live';
  posts:any;
  sports: any[] = [];
  constructor(private http:HttpClient){

  }



  getPosts(){
    //var rezultat = this.posts.map()
}


mappedArray = [];

  ngOnInit() {
    //this.posts = this.http.get(this.ROOT_URL).subscribe(s=>{
      //this.sports = s as any;
      //console.log("Ovo je post",this.sports);
    //})
  }
}
