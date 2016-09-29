import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ScoreboardComponent } from './scoreboard.component';
import { ScoreboardItemComponent } from './scoreboardItem.component';
import { RaceScoreService } from './raceScore.service';

@NgModule({
  imports: [
    SharedModule
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
