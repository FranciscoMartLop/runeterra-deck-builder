import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: any[] = [];

  @Output() cardClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.getCards();
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

}
