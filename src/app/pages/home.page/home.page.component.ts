import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss']
})
export class HomePageComponent implements OnInit {
  focus: any;
  focus1: any;
model = {
  headTitle : "Welcome to BBCA",
  subTitle : "The British bangladeshi Caterers Association",
}
  constructor() { }

  ngOnInit() {}

}


