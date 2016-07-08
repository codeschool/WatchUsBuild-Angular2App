import { Component } from '@angular/core'
import { RaceService } from './race.service'
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  selector: 'racing-app',
  template: ` 
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <ul class="nav navbar-nav navbar-right">
        <li><a [routerLink]="['']">About</a></li>
        <li><a [routerLink]="['/schedule']">Schedule</a></li>
        <li><a [routerLink]="['/scoreboard']">Scoreboard</a></li>
      </ul>
    </div>
  </div>
</nav>
<main role="main">
  <router-outlet></router-outlet>
<main>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [RaceService, HTTP_PROVIDERS]
})
export class AppComponent {

}
