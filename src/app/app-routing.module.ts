import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page/home-page.component';
import { DetailListComponent } from './modules/details/detail-list/detail-list/detail-list.component';
import { DetailPageComponent } from './modules/details/detail-page/detail-page/detail-page.component';
import { VehiclesComponent } from './modules/details/vehicles/vehicles/vehicles.component';
import { StarshipComponent } from './modules/details/starships/starship/starship.component';


const routes: Routes = [
//   {
//     path: 'home',
//     component: HomePageComponent,
//   children: [
//   {
//     path: 'listpage',
//     component: DetailListComponent
//   },
//   {
//     path:'detail',
//     component: DetailPageComponent
//   },
//   {
//     path:'data',
//     component: VehiclesComponent
//   }
// ]},
//   {
//   path:'load',
//   component: StarshipComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
