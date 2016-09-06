import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import './style.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdCoreModule } from '@angular2-material/core';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { App } from './components/App';
import { routes } from './router';
import { ProfilesService } from './providers/ProfilesService';
import { DisplayFriendPipe } from './pipes/DisplayFriendPipe';
import { FriendsGraphql } from './components/Friends.graphql';
import { FriendsRest } from './components/Friends.rest';
import { Intro } from './components/Intro';
import { ListGraphql } from './components/List.graphql';
import { ListRest } from './components/List.rest';

@NgModule({
  declarations: [
    App,
    DisplayFriendPipe,
    FriendsGraphql,
    FriendsRest,
    Intro,
    ListGraphql,
    ListRest
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdCoreModule.forRoot(),
    MdCardModule.forRoot(),
    MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProfilesService,
  ],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
