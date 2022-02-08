import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/Navigation/topnavbar.component';
import { SideNavBarComponent } from 'src/app/SideNav/sidenavbar.component';

import { AppComponent } from './app.component';
import { VerticalCardComponent } from './Cards/vertical.card.component';
import { RightNavBarComponent } from './RightNavBar/rightnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    VerticalCardComponent,
    SideNavBarComponent,
    RightNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
