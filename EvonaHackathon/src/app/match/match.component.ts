import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match:any;
  rezultat:any[]=[];
  constructor() { }

  ngOnInit(): void {
    //console.log(this.match);
    this.ucitajRezultat();
  }

  ucitajRezultat(){
    this.rezultat = this.match.LiveMatchScore.split(':');
    //console.log("Ovo je rezultat",this.rezultat);
  }

}
