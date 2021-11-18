import { Injectable} from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MatchesServis{


    post={};
    readonly ROOT_URL = 'https://stageapis.bet-x.eu/SportOfferApi/api/sport/offer/v3/matches/live'

    posts:any;
    sports: any[] = [];

    sportIdSelection = new Subject();

    listenForSportIdSelection(){
      return this.sportIdSelection.asObservable();
    }

    emmitSportIdSelection(SportId:number){
      this.sportIdSelection.next(SportId);
    }

    constructor(private http:HttpClient){
      this.posts = this.http.get(this.ROOT_URL).subscribe(s=>{
        this.sports = s as any;
        //console.log("Ovo je post",this.sports);
      });
    }
    getMatches(){
        return this.http.get(this.ROOT_URL, )
    }
    toogle:boolean=true;
    ngOnInit(): void {}

    //napraviti metodu da prosljedi parametar id

    //subject dodati

}
