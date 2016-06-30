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
  ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
  selector: 'app',
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  template: `
    <md-toolbar>
      <a class="index-link" href="#">Profiles</a>
    </md-toolbar>

    <router-outlet></router-outlet>
  `
})
export class App {}
