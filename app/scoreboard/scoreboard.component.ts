import { Component } from '@angular/core'
import { RaceService } from '../shared/race.service'
import { Race } from '../shared/race'

@Component({
  selector: 'scoreboard',
  template: `
  <header class="container">
    <h1>Scoreboard</h1>
    <h3>Race Notifications</h3>
    <ul>
      <li *ngFor="let notification of notifications">{{notification}}</li>
    </ul>
  </header>
  
  <div class="container-fluid scoreboard-display">
    <div class="row">
      <div class="col-xs-4" *ngFor="let race of races">
        <scoreboard-item [race]="race" (notification)="notifications.unshift($event)"></scoreboard-item>
      </div>
    </div>
  </div>
  `,
  styles: [`
    ul {
      height: 200px;
      overflow: auto;
    }
  `]
})

export class ScoreboardComponent {
  races: Race[]
  notifications: string[] = []
  
  constructor(private raceService: RaceService){}
  
  ngOnInit(){
    this.raceService.getRaces()
      .subscribe(data => {
        this.races = data
      })
  }
}
