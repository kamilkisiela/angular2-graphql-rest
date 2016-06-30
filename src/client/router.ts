import {
  provideRouter,
  RouterConfig
} from '@angular/router';

import {
  List as ListREST
} from './components/List.rest';

export const routes: RouterConfig = [
  // REST
  {
    path: '',
    component: ListREST
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
