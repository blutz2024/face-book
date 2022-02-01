import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/Navigation/topnavbar.component';
import { SideNavBarComponent } from 'src/app/SideNav/sidenavbar.component';

import { AppComponent } from './app.component';
import { VerticalCardComponent } from './Cards/vertical.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    VerticalCardComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
