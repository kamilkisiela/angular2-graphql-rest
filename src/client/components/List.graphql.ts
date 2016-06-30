import {
  Component
} from '@angular/core';

import {
  MD_CARD_DIRECTIVES
} from '@angular2-material/card'

import {
  Apollo
} from 'angular2-apollo';

import gql from 'graphql-tag';

import {
  client
} from '../client';

import {
  Friends
} from './Friends';

@Component({
  selector: 'list',
  template: require('raw!./List.html'),
  directives: [
    MD_CARD_DIRECTIVES,
    Friends
  ]
})
export class List {
  data = {
    profiles: []
  };
}
