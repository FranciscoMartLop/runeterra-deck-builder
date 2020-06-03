import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() regionEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() manaCostEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() typeEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() rarityEmitter: EventEmitter<any> = new EventEmitter<any>();

  regions: any[] = [];
  activeRegions: any[] = [];
  activeManaCost: any[] = [];
  activateType: any[] = [];
  activateRarity: any[] = [];

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.cardService.getRegions().then((regions: any) => {
      regions._embedded.regions.map((region) => {
        this.regions.push(region);
      })
    });
  }

  toggleRegion(region) {
    this.toggleRegionStyle(region);
    this.toggleRegionFunc(region);
    this.regionEmitter.emit(this.activeRegions);
  }

  toggleRegionStyle(region) {
    var regionImg = document.querySelector("img#" + region.abbreviation) as HTMLElement;
    var regionText = document.querySelector("span#" + region.abbreviation) as HTMLElement;
    if (regionImg.style.opacity == "1")
      regionImg.style.opacity = "0.3";
    else
      regionImg.style.opacity = "1";

    if (regionText.style.color == "rgb(204, 173, 112)")
      regionText.style.color = "rgb(170, 171, 202)";
    else
      regionText.style.color = "rgb(204, 173, 112)";
  }

  toggleRegionFunc(region) {
    if (this.activeRegions.indexOf(region.name) == -1)
      this.activeRegions.push(region.name);
    else {
      this.activeRegions.splice(this.activeRegions.indexOf(region.name), 1);
    }
  }

  toggleManaCost(manaCost) {
    this.toggleManaCostStyle(manaCost);
    this.toggleManaCostFunc(manaCost);
    this.manaCostEmitter.emit(this.activeManaCost);
  }

  toggleManaCostStyle(manaCost) {
    var manaDiv = document.getElementById(manaCost) as HTMLElement;
    if (manaDiv.style.opacity == "1")
      manaDiv.style.opacity = "0.3";
    else
      manaDiv.style.opacity = "1";
  }

  toggleManaCostFunc(manaCost) {
    if (this.activeManaCost.indexOf(manaCost) == -1) {
      if (manaCost == 7) {
        this.activeManaCost.push(manaCost);
        this.activeManaCost.push(8);
        this.activeManaCost.push(9);
        this.activeManaCost.push(10);
        this.activeManaCost.push(11);
        this.activeManaCost.push(12);
      } else
        this.activeManaCost.push(manaCost);
    }
    else {
      if (manaCost == 7) {
        this.activeManaCost.splice(this.activeManaCost.indexOf(manaCost), 1);
        this.activeManaCost.splice(this.activeManaCost.indexOf(8), 1);
        this.activeManaCost.splice(this.activeManaCost.indexOf(9), 1);
        this.activeManaCost.splice(this.activeManaCost.indexOf(10), 1);
        this.activeManaCost.splice(this.activeManaCost.indexOf(11), 1);
        this.activeManaCost.splice(this.activeManaCost.indexOf(12), 1);
      } else
        this.activeManaCost.splice(this.activeManaCost.indexOf(manaCost), 1);
    }

  }

  toggleType(type) {
    this.toggleTypeStyle(type);
    this.toggleTypeFunc(type);
    this.typeEmitter.emit(this.activateType);
  }

  toggleTypeStyle(type) {
    var typeImg = document.querySelector("svg#" + type) as HTMLElement;
    var typeText = document.querySelector("span#" + type) as HTMLElement;
    if (typeImg.style.opacity == "1")
      typeImg.style.opacity = "0.3";
    else
      typeImg.style.opacity = "1";

    if (typeText.style.color == "rgb(204, 173, 112)")
      typeText.style.color = "rgb(170, 171, 202)";
    else
      typeText.style.color = "rgb(204, 173, 112)";
  }

  toggleTypeFunc(type) {
    if (this.activateType.indexOf(type) == -1)
      this.activateType.push(type);
    else
      this.activateType.splice(this.activateType.indexOf(type), 1);
  }

  toggleRarity(rarity) {
    this.toggleRarityStyle(rarity);
    this.toggleRarityFunc(rarity);
    this.rarityEmitter.emit(this.activateRarity);
  }

  toggleRarityStyle(rarity) {
    var rarityImg = document.querySelector("svg#" + rarity + "Rarity") as HTMLElement;
    var rarityText = document.querySelector("span#" + rarity + "Rarity") as HTMLElement;
    if (rarityImg.style.opacity == "1")
      rarityImg.style.opacity = "0.3";
    else
      rarityImg.style.opacity = "1";

    if (rarityText.style.color == "rgb(204, 173, 112)")
      rarityText.style.color = "rgb(170, 171, 202)";
    else
      rarityText.style.color = "rgb(204, 173, 112)";
  }

  toggleRarityFunc(rarity) {
    if (this.activateRarity.indexOf(rarity) == -1)
      this.activateRarity.push(rarity);
    else
      this.activateRarity.splice(this.activateRarity.indexOf(rarity), 1);
  }

}
