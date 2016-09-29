import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RacesComponent } from './races.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RacesComponent
  ]
})
export class RacesModule {}
