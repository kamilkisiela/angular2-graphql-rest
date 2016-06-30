import {
  Component
} from '@angular/core';

import {
  MD_CARD_DIRECTIVES
} from '@angular2-material/card'

import {
  ProfilesService
} from '../providers/ProfilesService';

import {
  Friends
} from './Friends';

@Component({
  selector: 'list',
  template: require('raw!./List.html'),
  directives: [
    MD_CARD_DIRECTIVES,
    Friends
  ],
  providers: [
    ProfilesService
  ]
})
export class List {
  data = {
    profiles: []
  };

  constructor(private profilesService: ProfilesService) {}

  ngOnInit() {
    this.profilesService
      .all()
      .then((profiles) => {
        this.data.profiles = profiles;
      });
  }
}
