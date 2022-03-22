import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/Navigation/topnavbar.component';
import { SideNavBarComponent } from 'src/app/SideNav/sidenavbar.component';

import { AppComponent } from './app.component';
import { VerticalCardComponent } from './Cards/vertical.card.component';
import { RightNavBarComponent } from './RightNavBar/rightnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile.component';
import { HomeLayoutComponent } from './home-layout.component';
import { WatchComponent } from './Routing/watch.component';
import { MarketplaceComponent } from './marketplace.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    VerticalCardComponent,
    SideNavBarComponent,
    RightNavBarComponent,
    ProfileComponent,
    HomeLayoutComponent,
    WatchComponent, 
    MarketplaceComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
