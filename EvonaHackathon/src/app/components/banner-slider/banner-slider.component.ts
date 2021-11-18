import { Component, OnInit, Input } from '@angular/core';
import { BannerServis } from 'src/app/servisi/banner.servis';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class BannerSliderComponent implements OnInit {

  public current = 0;

  img_list={  }

  public banners: any = [];
  constructor(private bannerServis: BannerServis) {

    this.bannerServis.getBanneri().subscribe((banners: any) => {
      this.banners=banners;
      console.log(this.banners);
    })
   }
  ngOnInit(): void {

    setInterval(() => {
      this.current = ++this.current % this.banners.length;
    }, 5000);
  }

}
