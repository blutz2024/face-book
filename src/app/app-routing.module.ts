import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { HomeLayoutComponent } from './home-layout.component';
import { WatchComponent } from './Routing/watch.component';
import { MarketplaceComponent } from './marketplace.component';

const routes:Routes = [
  {path: "watch", component: WatchComponent},
  {path: '', component: HomeLayoutComponent},
  {path: 'bella.lutz.1293', component: ProfileComponent },
  {path: 'home', component: HomeLayoutComponent}, 
  {path: 'marketplace', component: MarketplaceComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports:[
  RouterModule
  ]
})
export class AppRoutingModule { }
