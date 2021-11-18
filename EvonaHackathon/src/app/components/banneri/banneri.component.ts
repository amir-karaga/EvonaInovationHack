import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banner } from 'src/app/modules/Banner.model';
import { BannerServis } from 'src/app/servisi/banner.servis';


@Component({
  selector: 'app-banneri',
  templateUrl: './banneri.component.html',
  styleUrls: ['./banneri.component.css']
})
export class BanneriComponent implements OnInit {

  public banners: any = [];
  constructor(private bannerServis: BannerServis) {

    this.bannerServis.getBanneri().subscribe((banners: any) => {
      this.banners=banners;
      //console.log(this.banners);
    })
   }

   rb: number=0;



  ngOnInit(): void {

  }

  prikaziSlike(){

  }

}
