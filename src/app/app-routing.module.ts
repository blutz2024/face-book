import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { HomeLayoutComponent } from './home-layout.component';
import { WatchComponent } from './Routing/watch.component';
import { MarketplaceComponent } from './marketplace.component';
import { FormComponent } from './lab 9/form.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: "watch", component: WatchComponent},
  {path: 'bella.lutz.1293', component: ProfileComponent },
  {path: 'home', component: HomeLayoutComponent}, 
  {path: 'marketplace', component: MarketplaceComponent},
  {path: 'admin', component: FormComponent},

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
