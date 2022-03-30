import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ]
})
export class BannerComponent implements OnInit {

  banners: string[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event:NavigationEvent)=>{
      if(event instanceof NavigationEnd) {
        this.banners = this.router.url.split("/").slice(1);
      }
    })
  }

}
