import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { ScoreboardComponent } from './scoreboard.component';
import { ScoreboardItemComponent } from './scoreboardItem.component';
import { RacesComponent } from './races.component';

import { RaceService } from './race.service';
import { RaceScoreService } from './raceScore.service'

import { AppRouting } from './app.routing';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  declarations: [
    AppComponent,
    RacesComponent,
    AboutComponent,
    ScoreboardComponent,
    ScoreboardItemComponent
  ],
  providers: [
    RaceService,
    RaceScoreService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
