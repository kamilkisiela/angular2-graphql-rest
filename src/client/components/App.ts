import {
  Component
} from '@angular/core';

import {
  MD_TOOLBAR_DIRECTIVES
} from '@angular2-material/toolbar';

import {
  MD_BUTTON_DIRECTIVES
} from '@angular2-material/button';

import {
  List
} from './List';

@Component({
  selector: 'app',
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    List
  ],
  template: `
    <md-toolbar>
      <a class="index-link" href="#">Profiles</a>

      <span style="flex: 1 1 auto;"></span>

      <a
        md-button
        color="accent"
        href="http://localhost:3010/graphql">
        Go to GraphiQL
      </a>
    </md-toolbar>

    <list></list>
  `
})
export class App {}
