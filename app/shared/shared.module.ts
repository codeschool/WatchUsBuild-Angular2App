import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RaceService } from './race.service';

@NgModule({
  exports: [
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    RaceService
  ]
})
export class SharedModule {}