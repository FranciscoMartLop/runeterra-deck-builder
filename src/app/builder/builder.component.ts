import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardsService } from '../cards.service';

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

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    /* Como obtener las regiones */
    /* this.cardService.getRegions().then( (regions: any) => {
      regions._embedded.regions.map((region) => {
        
      })
    }); */
  }

  ngOnChanges() {
    if (this.card !== undefined) {
      if (this.cardList.includes(this.card))
        this.addExistingCard();
      else
        this.addNewCard();
      this.checkStats();
    }
  }

  saveDeck(f: NgForm) {
    console.log(f.value);
  }

  removeCard(i, cardToRemove) {
    var cardRemoved: any;
    if (cardToRemove.quantity == 1) {
      if (this.cardList.length == 1)
        cardRemoved = this.cardList.pop();
      else
        cardRemoved = this.cardList.splice(i, 1)[0];
      this.checkRemoveCardType(cardRemoved.type, cardRemoved.supertype);
    } else {
      this.cardList.map((card) => {
        if (card == cardToRemove)
          card.quantity--;
      });
      this.checkRemoveCardType(cardToRemove.type, cardToRemove.supertype);
    }
    this.checkStats();
  }

  addNewCard() {
    this.card.quantity = 1;
    this.cardList.push(this.card);
    this.checkAddedCardType(this.card.type, this.card.supertype);
  }

  addExistingCard() {
    this.cardList.map((card) => {
      if (card === this.card && card.quantity < 3) {
        card.quantity = card.quantity + 1;
        this.checkAddedCardType(this.card.type, this.card.supertype);
      }
    })
  }

  changeJustifyStart() {
    var div = document.querySelector('.deck-container') as HTMLElement;
    div.style.justifyContent = "start";
  }

  changeJustifyCenter() {
    var div = document.querySelector('.deck-container') as HTMLElement;
    div.style.justifyContent = "center";
  }

  regionCard(region, id, cardImage) {
    var div = document.getElementById(id);
    if (region == "Noxus") {
      div.style.background = "linear-gradient(90deg, rgb(160, 82, 79) 30%, rgba(160, 82, 79, 0) 70%), url(" + cardImage + ") right center no-repeat";
      div.style.backgroundSize = "cover";
    } else if (region == "Demacia") {
      div.style.background = "linear-gradient(90deg, rgb(191, 176, 131) 30%, rgba(191, 176, 131, 0) 70%), url(" + cardImage + ") right center no-repeat";
      div.style.backgroundSize = "cover";
    } else if (region == "PiltoverZaun") {
      div.style.background = "linear-gradient(90deg, rgb(226, 159, 118) 30%, rgba(226, 159, 118, 0) 70%), url(" + cardImage + ") right center no-repeat";
      div.style.backgroundSize = "cover";
    } else if (region == "Freljord") {
      div.style.background = "linear-gradient(90deg, rgb(90, 184, 218) 30%, rgba(90, 184, 218, 0) 70%), url(" + cardImage + ") right center no-repeat";
      div.style.backgroundSize = "cover";
    } else if (region == "ShadowIsles") {
      div.style.background = "linear-gradient(90deg, rgb(59, 125, 111) 30%, rgba(59, 125, 111, 0) 70%), url(" + cardImage + ") right center no-repeat";
      div.style.backgroundSize = "cover";
    } else if (region == "Bilgewater") {
      div.style.background = "linear-gradient(90deg, rgb(180, 86, 58) 30%, rgba(180, 86, 58, 0) 70%), url(" + cardImage + ") right center no-repeat";
      div.style.backgroundSize = "cover";
    } else if (region == "Ionia") {
      div.style.background = "linear-gradient(90deg, rgb(207, 130, 155) 30%, rgba(207, 130, 155, 0) 70%), url(" + cardImage + ") right center no-repeat";
      div.style.backgroundSize = "cover";
    }
  }

  checkAddedCardType(type, supertype) {
    if (type == "Unit" && supertype == "Champion") {
      this.champions++;
      this.cards++;
    } else if (type == "Unit" && supertype != "Champion") {
      this.creatures++;
      this.cards++;
    } else if (type == "Spell") {
      this.spells++;
      this.cards++;
    }
  }

  checkRemoveCardType(type, supertype) {
    if (type == "Unit" && supertype == "Champion") {
      this.champions--;
      this.cards--;
    } else if (type == "Unit" && supertype != "Champion") {
      this.creatures--;
      this.cards--;
    } else if (type == "Spell") {
      this.spells--;
      this.cards--;
    }
  }

  checkStats() {
    var champions = document.querySelector(".champions-stat") as HTMLElement;
    var cards = document.querySelector(".cards-stat") as HTMLElement;
    if (this.champions > 6)
      champions.style.color = "rgb(224, 18, 115)";
    else
      champions.style.color = "white";

    if (this.cards > 40)
      cards.style.color = "rgb(224, 18, 115)";
    else
      cards.style.color = "white";
  }

}
