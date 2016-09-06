import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app',
  template: `
    <md-toolbar>
      <a class="index-link" routerLink="/">Profiles</a>

      <span style="flex: 1 1 auto;"></span>

      <a
        md-button
        routerLink="/use-graphql">
        GraphQL
      </a>
      <a
        md-button
        routerLink="/use-rest">
        REST
      </a>

      <a
        md-button
        color="accent"
        href="http://localhost:3010/graphql">
        Go to GraphiQL
      </a>
    </md-toolbar>

    <router-outlet></router-outlet>
  `
})
export class App {}
