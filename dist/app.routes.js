"use strict";
var router_1 = require('@angular/router');
var races_component_1 = require('./races.component');
var scoreboard_component_1 = require('./scoreboard.component');
var about_component_1 = require('./about.component');
exports.routes = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'schedule', component: races_component_1.RacesComponent },
    { path: 'scoreboard', component: scoreboard_component_1.ScoreboardComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map