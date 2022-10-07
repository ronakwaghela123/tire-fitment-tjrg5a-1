import { Action, createAction, props } from '@ngrx/store';
// import model/interface from db.json here...

// Year Action constants
export const LOAD_YEARS = '[Fitment] Load Years';
export const LOAD_YEARS_FAIL = '[Fitment] Load Years Fail';
export const LOAD_YEARS_SUCCESS = '[Fitment] Load Years Success';

// Make Action constants
export const LOAD_MAKE = '[Fitment] Load Make';
export const LOAD_MAKE_FAIL = '[Fitment] Load Make Fail';
export const LOAD_MAKE_SUCCESS = '[Fitment] Load Make Success';

// Year Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: any) {} // Replace 'any' with interface
}

// Make Action creators
export class LoadMake implements Action {
  readonly type = LOAD_MAKE;
}
export class LoadMakeFail implements Action {
  readonly type = LOAD_MAKE_FAIL;
  constructor(public payload: any) {}
}
export class LoadMakeSuccess implements Action {
  readonly type = LOAD_MAKE_SUCCESS;
  constructor(public payload: any) {} // Replace 'any' with interface
}

// Action types
export type VehicleYearAction = LoadYears | LoadYearsFail | LoadYearsSuccess;

export type VehicleMakeAction = LoadMake | LoadMakeFail | LoadMakeSuccess;
