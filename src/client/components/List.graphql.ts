import { Component } from '@angular/core';
import { Apollo } from 'angular2-apollo';

import gql from 'graphql-tag';

import { client } from '../client';

@Component({
  selector: 'list-graphql',
  template: require('raw!./List.graphql.html'),
})
@Apollo({
  client,
  queries(context: ListGraphql) {
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
export class ListGraphql {}
