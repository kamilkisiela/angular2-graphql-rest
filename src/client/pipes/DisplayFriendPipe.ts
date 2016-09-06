import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayFriend'
})
export class DisplayFriendPipe implements PipeTransform {
  transform(friend: any): string {
    if (friend) {
      return friend.fullName;
    }
  }
}
