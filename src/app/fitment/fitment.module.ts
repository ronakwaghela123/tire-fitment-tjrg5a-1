import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from './store/effects/vehicle.effects';
import { reducer } from './store/reducers/vehicle.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('vehicle', reducer),
    EffectsModule.forFeature([VehicleEffects]),
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent],
})
export class FitmentModule {}
