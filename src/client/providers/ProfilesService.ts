import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProfilesService {
  constructor(private http: Http) {}

  all() {
    return this.http
      .get('api/profiles')
      .map(response => response.json());
  }

  single(id: any) {
    return this.http
      .get('api/profiles/' + id)
      .map(response => response.json());
  }
}
