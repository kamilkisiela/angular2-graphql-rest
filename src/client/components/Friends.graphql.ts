  import {
  Component,
  Input
} from '@angular/core';

import {
  ProfilesService
} from '../providers/ProfilesService';

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
  @Input() friends: number[];
  data: any = {};

  constructor(private profileServices: ProfilesService) {}

  ngOnInit() {
    if (this.friends) {
      for (let i = 0; i < this.friends.length; i++) {
        const id = this.friends[i];

        this.profileServices
          .single(id)
          .then((profile) => {
            this.data[id] = profile;
          });
      }
    }
  }

  getFriend(id) {
    return this.data[id];
  }
}
