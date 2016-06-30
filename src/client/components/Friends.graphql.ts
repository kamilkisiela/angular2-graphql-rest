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

import {
  DisplayFriendPipe
} from '../pipes/DisplayFriendPipe';

@Component({
  selector: 'friends',
  template: `
    <span class="gray">
      Friend with:
    </span>
    <span *ngIf="friends" *ngFor="let friendId of friends" class="friend-with">
      {{ getFriend(friendId) | displayFriend }}
    </span>
  `,
  pipes: [
    DisplayFriendPipe
  ]
})
export class Friends {
  @Input() friends: any;
  data: any = {};
}
