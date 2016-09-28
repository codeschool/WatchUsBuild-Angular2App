import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreboardComponent } from './scoreboard.component';
import { ScoreboardItemComponent } from './scoreboardItem.component';

import { RaceScoreService } from './raceScore.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoreboardComponent,
    ScoreboardItemComponent
  ],
  providers: [
    RaceScoreService
  ]
})
export class ScoreboardModule {}
