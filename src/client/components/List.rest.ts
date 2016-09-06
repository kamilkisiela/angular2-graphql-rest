import { Component } from '@angular/core';

import { ProfilesService } from '../providers/ProfilesService';

@Component({
  selector: 'list-rest',
  template: require('raw!./List.rest.html'),
})
export class ListRest {
  data = {
    profiles: []
  };

  constructor(private profilesService: ProfilesService) {}

  ngOnInit() {
    this.profilesService
      .all()
      .subscribe((profiles) => {
        this.data.profiles = profiles;
      });
  }
}
