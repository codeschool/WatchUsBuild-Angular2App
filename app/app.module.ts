import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';

import { RacesModule } from './races/races.module';
import { ScoreboardModule } from './scoreboard/scoreboard.module';

import { AppRouting } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting,
    RacesModule,
    ScoreboardModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
