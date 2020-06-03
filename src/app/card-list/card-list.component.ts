import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: any[] = [];
  leakedCards: any[] = [];
  isFiltered: boolean[] = [];

  @Input() activateRegions: any[] = [];
  @Input() activateManaCost: any[] = [];
  @Input() activateType: any[] = [];
  @Input() activateRarity: any[] = [];
  @Input() filter: number;

  @Output() cardClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() toggleFilterEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.getCards();
  }

  ngOnChanges() {
    this.filterCards();
  }

  getCards() {
    this.cardsService.getCards().then((cards: any) => {
      cards.map((card) => {
        this.cards.push(card);
      })
    });
  }

  addCard(card) {
    this.cardClicked.emit(card);
  }

  toggleFilter() {
    var button = document.querySelector(".filter-button") as HTMLElement;
    if (button.style.borderColor == "rgb(56, 198, 244)") {
      button.style.borderColor = "rgb(204, 173, 112)";
      this.toggleFilterEvent.emit(false);
    }
    else {
      button.style.borderColor = "rgb(56, 198, 244)";
      this.toggleFilterEvent.emit(true);
    }

  }

  filterCards() {
    this.leakedCards = [];
    this.cards.map((card) => {
      this.isFiltered = [];
      if (this.activateRegions.length != 0)
        this.filterByRegions(card);
      if (this.activateManaCost.length != 0)
        this.filterByManaCost(card);
      if (this.activateType.length != 0)
        this.filterByType(card);
      if (this.activateRarity.length != 0)
        this.filterByRarity(card);
      if (!this.isFiltered.includes(false))
        this.leakedCards.push(card);
    })
    if (this.leakedCards.length == 0)
      this.leakedCards = this.cards;
    this.orderCards();
  }

  filterByRegions(card) {
    if (this.activateRegions.includes(card.region))
      this.isFiltered.push(true);
    else
      this.isFiltered.push(false);
  }

  filterByManaCost(card) {
    if (this.activateManaCost.includes(card.cost))
      this.isFiltered.push(true);
    else
      this.isFiltered.push(false);
  }

  filterByType(card) {
    if ((this.activateType.includes(card.type) && card.supertype != "Champion" && card.type != "Spell") || (this.activateType.includes('Champion')
      && card.supertype == "Champion" && card.type != "Spell") || this.activateType.includes(card.type) && card.type == "Spell")
      this.isFiltered.push(true);
    else
      this.isFiltered.push(false);
  }

  filterByRarity(card) {
    if (this.activateRarity.includes(card.rarityRef) || (this.activateRarity.includes("Champion") && card.supertype == "Champion"))
      this.isFiltered.push(true);
    else
      this.isFiltered.push(false);
  }

  orderCards() {
    this.leakedCards.sort(function (a, b) {
      if (a.cost > b.cost)
        return 1;
      if (a.cost < b.cost)
        return -1;
      return 0;
    })
  }

}
