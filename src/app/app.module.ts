import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/home/main-page/main-page/main-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page/home-page.component';
import { DetailPageComponent } from './modules/details/detail-page/detail-page/detail-page.component';
import { DetailListComponent } from './modules/details/detail-list/detail-list/detail-list.component';
import { LoadComponent } from './modules/load-page/load/load.component';
import { CharacterComponent } from './modules/details/characters/character/character.component';
import { FilmsComponent } from './modules/details/films/films/films.component';
import { PlanetsComponent } from './modules/details/planets/planets/planets.component';
import { SpeciesComponent } from './modules/details/species/species/species.component';
import { StarshipComponent } from './modules/details/starships/starship/starship.component';
import { VehiclesComponent } from './modules/details/vehicles/vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomePageComponent,
    DetailPageComponent,
    DetailListComponent,
    LoadComponent,
    CharacterComponent,
    FilmsComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
