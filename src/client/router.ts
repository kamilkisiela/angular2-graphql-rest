import { Routes } from '@angular/router';

import { Intro } from './components/Intro';
import { ListGraphql } from './components/List.graphql';
import { ListRest } from './components/List.rest';

export const routes: Routes = [
  { path: '',                         component: Intro },
  // GraphQL
  { path: 'use-graphql',              component: ListGraphql },
  // REST
  { path: 'use-rest',                 component: ListRest },
];
