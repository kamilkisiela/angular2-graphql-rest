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
  List
} from './List';

@Component({
  selector: 'app',
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    List
  ],
  template: `
    <md-toolbar>
      <a class="index-link" href="#">Profiles</a>
    </md-toolbar>
    <list></list>
  `
})
export class App {}
