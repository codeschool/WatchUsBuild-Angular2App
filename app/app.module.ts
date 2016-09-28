import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';

import { RaceService } from './race.service';

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
  providers: [
    RaceService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
