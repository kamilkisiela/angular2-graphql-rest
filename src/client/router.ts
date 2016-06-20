import {
  provideRouter,
  RouterConfig
} from '@angular/router';

import {
  Intro
} from './components/Intro';

import {
  List as ListGraphQL
} from './components/List.graphql';

import {
  List as ListREST
} from './components/List.rest';

export const routes: RouterConfig = [
  { path: '',                         component: Intro },
  // GraphQL
  { path: 'use-graphql',              component: ListGraphQL },
  // REST
  { path: 'use-rest',                 component: ListREST },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
