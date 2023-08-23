import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss']
})
export class HomePageComponent implements OnInit {
  focus: any;
  focus1: any;
  carouselList = [
    {
      id: 1,
      url: "./assets/img/soroush-karimi.jpg",
      caption: "Somewhere"
    },
    {
      id: 2,
      url: "./assets/img/federico-beccari.jpg",
      caption: "Somewhere"
    },
    {
      id: 3,
      url: "./assets/img/joshua-stannard.jpg",
      caption: "Somewhere"
    },
    {
      id: 5,
      url: "./assets/img/joshua-stannard.jpg",
      caption: "Somewhere"
    },
    {
      id: 6,
      url: "./assets/img/joshua-stannard.jpg",
      caption: "Somewhere"
    },
    {
      id: 7,
      url: "./assets/img/joshua-stannard.jpg",
      caption: "Somewhere"
    },

  ]
  model = {
    headTitle: "Welcome to BBCA",
    subTitle: "The British bangladeshi Caterers Association",
    secondaryHeadTitle: "Catering for Bangladeshi caterers",
    secondarySubTitle: "We are an industry body set up to represent the best interests of the Bangladeshi-owned and run restaurants, takeaways and allied services providers to the catering sector.",
  }
  constructor() { }

  ngOnInit() { }

}


