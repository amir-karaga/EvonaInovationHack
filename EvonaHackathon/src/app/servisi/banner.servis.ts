import { Injectable} from "@angular/core";
import { Banner } from "../modules/Banner.model";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class BannerServis{
    private banneri: any;
    private readonly banneriUrl= 'https://stageapis.bet-x.eu/BannerApi/v2/banners/Online';

    constructor(private http: HttpClient){}

    getBanneri(){
        return this.http.get(this.banneriUrl, {
            headers: new HttpHeaders({
                TerminalId: "95002"
            })
        })
    }


}
