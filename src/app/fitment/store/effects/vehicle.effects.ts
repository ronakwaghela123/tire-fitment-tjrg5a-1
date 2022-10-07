import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TireFitmentService } from '../../service/tire-fitment.service';
import * as VehicleActions from '../actions/vehicle.action';

@Injectable()
export class VehicleEffects {
  constructor(
    private _tireFitmentService: TireFitmentService,
    private action$: Actions
  ) {}

  GetVehicles$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(VehicleActions.LOAD_YEARS),
      mergeMap((action) =>
        this._tireFitmentService.getToDos().pipe(
          map((data: any) => {
            console.log('success', data);
            return new VehicleActions.LoadYearsSuccess(data);
          }),
          catchError((error: Error) => {
            console.log('error');
            return of(new VehicleActions.LoadYearsFail(error));
          })
        )
      )
    )
  );
}
