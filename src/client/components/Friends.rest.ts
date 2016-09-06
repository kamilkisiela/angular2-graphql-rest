import { Component, Input } from '@angular/core';

import { ProfilesService } from '../providers/ProfilesService';

@Component({
  selector: 'friends-rest',
  template: `
    <span class="gray">
      Friend with:
    </span>

    <span *ngFor="let friendId of friends" class="friend-with">
      {{ getFriend(friendId) | displayFriend }}
    </span>
  `,
})
export class FriendsRest {
  @Input() friends: number[];
  data: any = {};

  constructor(private profileServices: ProfilesService) {}

  ngOnInit() {
    if (this.friends) {
      for (let i = 0; i < this.friends.length; i++) {
        const id = this.friends[i];

        this.profileServices
          .single(id)
          .subscribe((profile) => {
            this.data[id] = profile;
          });
      }
    }
  }

  getFriend(id) {
    return this.data[id];
  }
}
