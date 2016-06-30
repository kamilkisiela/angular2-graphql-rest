import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import {
  bootstrap
} from '@angular/platform-browser-dynamic';

import {
  HTTP_PROVIDERS
} from '@angular/http';

import './style.css';

import {
  App
} from './components/App';

import {
  APP_ROUTER_PROVIDERS
} from './router';

bootstrap(App, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
