import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  @Input() card: any;
  @Input() quantity: number;

  champions: number = 0;
  creatures: number = 0;
  spells: number = 0;
  cards: number = 0;
  cardList: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (this.card !== undefined) {
      if (this.cardList.includes(this.card))
        this.addExistingCard();
      else
        this.addNewCard();
    }
    console.log(this.cardList);
  }

  saveDeck(f: NgForm) {
    console.log(f.value);
  }

  removeCard(i) {
    this.cardList.splice(i, i);
  }

  addNewCard() {
    this.card.quantity = 1;
    this.cardList.push(this.card);
  }

  addExistingCard() {
    this.cardList.map((card) => {
      if (card === this.card && card.quantity < 3) 
        card.quantity = card.quantity + 1;
    })
  }
}
