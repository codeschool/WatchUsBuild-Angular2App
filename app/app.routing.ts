import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about.component';
import { RacesComponent } from './races.component';
import { ScoreboardComponent } from './scoreboard.component';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: AboutComponent },
  { path: 'schedule', component: RacesComponent },
  { path: 'scoreboard', component: ScoreboardComponent }
]);
