import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsService } from '../cards.service';
import { CardListComponent } from '../card-list/card-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { BuilderComponent } from '../builder/builder.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    CardListComponent,
    BuilderComponent,
    FilterComponent
  ],
  providers: [
    CardsService
  ]
})
export class HomeModule { }
