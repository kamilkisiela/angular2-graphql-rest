import {
  Pipe
} from '@angular/core';

@Pipe({
  name: 'displayFriend'
})
export class DisplayFriendPipe {
  transform(friend: any): string {
    if (friend) {
      return friend.fullName;
    }
  }
}
