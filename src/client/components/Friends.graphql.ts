  import {
  Component,
  Input
} from '@angular/core';


import {
  Apollo
} from 'angular2-apollo';

import gql from 'graphql-tag';

import {
  client
} from '../client';

@Component({
  selector: 'friends',
  template: `
    <span class="gray">
      Friend with:
    </span>
    <span *ngFor="let friend of data.profiles" class="friend-with">
      {{ friend.fullName }}
    </span>
  `
})
@Apollo({
  client,
  queries(context: Friends) {
    return {
      data: {
        query: gql`
          query getFriends($ids: [Int]!) {
            profiles (ids: $ids) {
              id
              fullName
            }
          }
        `,
        variables: {
          ids: context.friends.map((friend) => friend.id)
        }
      }
    };
  }
})
export class Friends {
  @Input() friends: any;
  data: any = {};
}
