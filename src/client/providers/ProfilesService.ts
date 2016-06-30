import {
  Injectable
} from '@angular/core';

import {
  Http
} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfilesService {
  constructor(private http: Http) {}

  all() {
    return this.http
      .get('api/profiles')
      .toPromise()
      .then(response => response.json());
  }

  single(id: any) {
    return this.http
      .get('api/profiles/' + id)
      .toPromise()
      .then(response => response.json());
  }
}
