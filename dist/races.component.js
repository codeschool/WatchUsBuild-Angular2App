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
var race_service_1 = require('./race.service');
var RacesComponent = (function () {
    function RacesComponent(raceService) {
        this.raceService = raceService;
        this.heading = "Ultra Racing Schedule";
        this.cash = 10000;
    }
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raceService.getRaces()
            .subscribe(function (data) { return _this.races = data; });
    };
    RacesComponent.prototype.totalCost = function () {
        var sum = 0;
        if (this.races) {
            for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
                var race = _a[_i];
                if (race.isRacing)
                    sum += race.entryFee;
            }
        }
        return sum;
    };
    RacesComponent.prototype.castDate = function (date) {
        return new Date(date);
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalCost();
    };
    RacesComponent.prototype.enterRace = function (race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
        }
        else {
            alert("You don't have enough cash");
        }
    };
    RacesComponent.prototype.cancelRace = function (race) {
        race.isRacing = false;
    };
    RacesComponent = __decorate([
        core_1.Component({
            selector: 'my-races',
            templateUrl: 'app/races.component.html',
            styleUrls: ['app/races.component.css']
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map