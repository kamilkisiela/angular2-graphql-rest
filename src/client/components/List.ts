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
@Apollo({
  client,
  queries(context: List) {
    return {
      data: {
        query: gql`
          query getProfiles {
            profiles {
              id
              fullName
              title
              avatar
              friends {
                id
              }
            }
          }
        `
      }
    };
  }
})
export class List {
  data: any;
}
