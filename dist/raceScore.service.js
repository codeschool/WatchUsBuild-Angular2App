"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Subject_1 = require('rxjs/Subject');
var UpdateableScore = (function () {
    function UpdateableScore(score, observable) {
        this.lapUpdateRate = 2;
        this.currentLapUpdate = 0;
        this.score = score;
        this.observable = observable;
    }
    UpdateableScore.prototype.cloneObj = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    UpdateableScore.prototype.updateScore = function () {
        // clone so that score is immutable, this simulates an actual update from a server
        this.score = this.cloneObj(this.score);
        // only update the race if the race hasn't finished
        if (this.score.currentLap < this.score.totalLaps) {
            this.updateLaps();
            this.updateRacers();
            this.observable.next(this.score);
        }
    };
    UpdateableScore.prototype.updateLaps = function () {
        if (this.score.currentLap < this.score.totalLaps && this.currentLapUpdate % this.lapUpdateRate === 0) {
            this.score.currentLap += 1;
        }
        this.currentLapUpdate++;
    };
    UpdateableScore.prototype.updateRacerAtPos = function (index) {
        var toPos = this.randomNum(-5, 5);
        var newIndex = index + toPos;
        var upperBound = this.score.racers.length - 1;
        var lowerBound = 0;
        if (newIndex > upperBound) {
            newIndex = upperBound;
        }
        if (newIndex < 0) {
            newIndex = 0;
        }
        this.score.racers.splice(newIndex, 0, this.score.racers.splice(index - 1, 1)[0]);
    };
    UpdateableScore.prototype.updateRacers = function () {
        var iterations = this.randomNum(1, 14);
        var racerIndex;
        for (var i = 0; i < iterations; i++) {
            racerIndex = this.randomNum(0, this.score.racers.length);
            this.updateRacerAtPos(racerIndex);
        }
    };
    UpdateableScore.prototype.randomNum = function (min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    };
    return UpdateableScore;
}());
var RaceScoreService = (function () {
    function RaceScoreService(http) {
        var _this = this;
        this.http = http;
        this.updateableScores = {};
        setInterval(function () {
            _this._updateScores();
        }, 1000);
    }
    RaceScoreService.prototype._updateScores = function () {
        var values = Object.values(this.updateableScores);
        values.forEach(function (updateableScore) { return updateableScore.updateScore(); });
    };
    RaceScoreService.prototype.getScores = function () {
        return this.http.get('app/raceScores.json')
            .map(function (response) { return response.json(); });
    };
    RaceScoreService.prototype.getScoreForRace = function (raceId) {
        var _this = this;
        var newScore = new Subject_1.Subject();
        this.http.get('app/raceScores.json')
            .map(function (response) {
            var scores = response.json();
            var foundScore = scores.find(function (i) { return i.raceId === raceId; });
            if (foundScore) {
                return foundScore;
            }
            else {
                return foundScore;
            }
        }).subscribe(function (data) {
            newScore.next(data);
            // set this to null just in case is still exists
            _this.updateableScores[raceId] = null;
            _this.updateableScores[raceId] = new UpdateableScore(data, newScore);
        });
        return newScore.asObservable();
    };
    RaceScoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RaceScoreService);
    return RaceScoreService;
}());
exports.RaceScoreService = RaceScoreService;
//# sourceMappingURL=raceScore.service.js.map