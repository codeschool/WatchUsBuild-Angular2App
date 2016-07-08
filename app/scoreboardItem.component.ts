import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Race } from './race'
import { RaceScoreService } from './raceScore.service'
import { RaceScore } from './raceScore'

@Component({
  selector: 'scoreboard-item',
  template: `
<div class="scoreboard-item" [class.finished]="score.currentLap >= score.totalLaps" *ngIf="score">
  <h2>{{race.name}}</h2>
  <p>Lap {{score.currentLap}} of {{score.totalLaps}}</p>
  <ol>
    <li *ngFor="let racer of score.racers let i=index">
      {{racer}}
    </li>
  </ol>
</div>
  `,
  providers: [RaceScoreService],
  styles: [`
    .scoreboard-item {
      border: 1px solid red;
    }
    
    .scoreboard-item.finished {
      border: 1px solid green;
    }
  `]
})

export class ScoreboardItemComponent {
  score: RaceScore

  @Input() race: Race
  @Output() notification = new EventEmitter<string>()
  
  constructor(private raceScoreService: RaceScoreService){}
  
  ngOnInit(){
    this.raceScoreService.getScoreForRace(this.race.id)
      .subscribe(data => {
        this.checkForNotification(data)
        this.score = data
      })
  }
  
  checkForNotification(newScore){
    if(newScore.currentLap >= newScore.totalLaps) {
      this.notification.emit(`The ${this.race.name} race has finished and ${newScore.racers[0]} is the winner!`)
    }

    if(this.score && newScore.racers[0] != this.score.racers[0]) {
      this.notification.emit(`${newScore.racers[0]} has taken the lead in the ${this.race.name} race!`)
    }
  }
}
