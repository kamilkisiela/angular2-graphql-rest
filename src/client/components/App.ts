import {
  Component
} from '@angular/core';

import {
  Http
} from '@angular/http';

import {
  MD_TOOLBAR_DIRECTIVES
} from '@angular2-material/toolbar';

import {
  MD_BUTTON_DIRECTIVES
} from '@angular2-material/button';

import {
  ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
  selector: 'app',
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  template: `
    <md-toolbar>
      <a class="index-link" [routerLink]="['/']">Profiles</a>

      <span style="flex: 1 1 auto;"></span>

      <a
        md-button
        [routerLink]="['/use-graphql']">
        GraphQL
      </a>
      <a
        md-button
        [routerLink]="['/use-rest']">
        REST
      </a>

      <a
        md-button
        color="accent"
        href="http://localhost:3010/graphql">
        Go to GraphiQL
      </a>
    </md-toolbar>

    <router-outlet></router-outlet>
  `
})
export class App {}
