import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsService } from '../cards.service';
import { CardListComponent } from '../card-list/card-list.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    CardListComponent
  ],
  providers: [
    CardsService
  ]
})
export class HomeModule { }
