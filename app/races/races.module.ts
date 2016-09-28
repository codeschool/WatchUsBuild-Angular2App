import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RacesComponent } from './races.component';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    RacesComponent
  ]
})
export class RacesModule {}
