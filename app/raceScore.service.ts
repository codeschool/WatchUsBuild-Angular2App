import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { RaceScore } from './raceScore'
import 'rxjs/add/operator/map'
import { Subject }    from 'rxjs/Subject'

class UpdateableScore {
  score: RaceScore
  observable: Subject<RaceScore>
  lapUpdateRate: number = 2
  currentLapUpdate: number = 0

  constructor(score: RaceScore, observable: Subject<RaceScore>){
    this.score = score
    this.observable = observable
  }
  
  cloneObj(obj){
    return JSON.parse(JSON.stringify(obj))
  }
  
  updateScore(){
    // clone so that score is immutable, this simulates an actual update from a server
    this.score = this.cloneObj(this.score) as RaceScore
    // only update the race if the race hasn't finished
    if(this.score.currentLap < this.score.totalLaps) {
      this.updateLaps()
      this.updateRacers()
      this.observable.next(this.score)
    }
  }
  
  updateLaps(){
    if(this.score.currentLap < this.score.totalLaps && this.currentLapUpdate % this.lapUpdateRate === 0) {
      this.score.currentLap += 1
    }
    
    this.currentLapUpdate ++
  }
  
  updateRacerAtPos(index) {
    let toPos:number = this.randomNum(-5, 5)
    let newIndex:number = index + toPos
    let upperBound:number = this.score.racers.length - 1
    let lowerBound = 0
    
    if(newIndex > upperBound) {
      newIndex = upperBound
    }
    
    if(newIndex < 0) {
      newIndex = 0
    }
    
    this.score.racers.splice(newIndex, 0, this.score.racers.splice(index-1, 1)[0])
  }
  
  updateRacers(){
    let iterations:number = this.randomNum(1, 14)
    let racerIndex:number

    for(var i=0; i < iterations; i++){
      racerIndex = this.randomNum(0, this.score.racers.length)
      this.updateRacerAtPos(racerIndex)
    }
  }
  
  randomNum(min:number, max:number):number {
    return Math.ceil(Math.random() * (max - min) + min)
  }
}

@Injectable()
export class RaceScoreService {
  updateableScores: {[Identifier: number]: UpdateableScore}
  
  constructor(private http: Http) {
    this.updateableScores = {}
    
    setInterval(()=>{
      this._updateScores()
    }, 1000)
  }
  
  _updateScores(){
    let values = Object.values(this.updateableScores) as UpdateableScore[]
    values.forEach((updateableScore)=> updateableScore.updateScore())
  }

  getScores() {
    return this.http.get('app/raceScores.json')
          .map(response => response.json() as RaceScore[])
  }
  
  getScoreForRace(raceId) {
    let newScore = new Subject<RaceScore>()

    this.http.get('app/raceScores.json')
      .map(response =>{
        let scores = response.json()
        let foundScore = scores.find((i)=> i.raceId === raceId)
        if(foundScore) {
          return foundScore as RaceScore
        } else {
          return foundScore
        }
      }).subscribe((data)=>{
        newScore.next(data)

        // set this to null just in case is still exists
        this.updateableScores[raceId] = null
        this.updateableScores[raceId] = new UpdateableScore(data, newScore)
      })
      return newScore.asObservable()
  }
}
