import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  card: any;
  quantity: number = 0;
  filter: number = 0;
  activeRegions: any[] = [];
  activateManaCost: any[] = [];
  activateType: any[] = [];
  activateRarity: any[] = [];

  constructor() { }

  ngOnInit() {

  }

  addCardHandler(valueEmitted) {
    if (valueEmitted === this.card)
      this.quantity++;
    this.card = valueEmitted;
  }

  toggleFilterHandler(activateFilter) {
    var mainContainer = document.querySelector(".home-grid-container") as HTMLElement;
    var appFilter = document.querySelector("app-filter") as HTMLElement;
    var appBuilder = document.querySelector("app-builder") as HTMLElement;
    if (activateFilter) {
      mainContainer.style.gridTemplateAreas = "card-list filter";
      appFilter.style.display = "contents";
      appBuilder.style.display = "none";
    } else {
      mainContainer.style.gridTemplateAreas = "card-list deck-creator";
      appFilter.style.display = "none";
      appBuilder.style.display = "contents";
    }
  }

  regionsHandler(valueEmitted) {
    this.filter++;
    this.activeRegions = valueEmitted;
  }

  manaCostHandler(valueEmitted) {
    this.filter++;
    this.activateManaCost = valueEmitted;
  }

  typeHandler(valueEmitted) {
    this.filter++;
    this.activateType = valueEmitted;
  }

  rarityHandler(valueEmitted) {
    this.filter++;
    this.activateRarity = valueEmitted;
  }

}
