import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  card: any;
  quantity: number = 0;

  constructor() { }

  ngOnInit() {

  }

  addCardHandler(valueEmitted) {
    if (valueEmitted === this.card)
      this.quantity++;
    this.card = valueEmitted;
  }

  resetCardHandler() {
    this.card = undefined;
  }

}
