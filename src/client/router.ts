import {
  provideRouter,
  RouterConfig
} from '@angular/router';

import {
  Intro
} from './components/Intro';

import {
  List as ListREST
} from './components/List.rest';

import {
  List as ListGraphQL
} from './components/List.graphql';

export const routes: RouterConfig = [
  {
    path: '',
    component: Intro
  },
  // REST
  {
    path: 'use-rest',
    component: ListREST
  },
  // REST
  {
    path: 'use-graphql',
    component: ListGraphQL
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
