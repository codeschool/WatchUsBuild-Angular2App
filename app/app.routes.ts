import { provideRouter, RouterConfig } from '@angular/router'
import { RacesComponent } from './races.component'
import { ScoreboardComponent } from './scoreboard.component'
import { AboutComponent } from './about.component'

export const routes: RouterConfig = [
  { path: '', component: AboutComponent },
  { path: 'schedule', component: RacesComponent },
  { path: 'scoreboard', component: ScoreboardComponent }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]