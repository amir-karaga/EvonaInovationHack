import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  @Input() league:any;

  constructor() { }

  ngOnInit(): void {
  }

}
