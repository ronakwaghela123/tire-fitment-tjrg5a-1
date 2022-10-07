// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import { ActionReducerMap } from '@ngrx/store';
import * as fromVehicle from '../actions/vehicle.action';

export interface VehicleState {
  type: string;
  status: string;
  success: boolean;
  year: string[];
}

export const yearInitialState: VehicleState = {
  type: '',
  status: '',
  success: false,
  year: [],
};

export interface MakeState {
  type: string;
  status: string;
  success: boolean;
  make: string[];
}

export const makeInitialState: MakeState = {
  type: '',
  status: '',
  success: false,
  make: [],
};

export function yearReducer(
  state = yearInitialState,
  action: fromVehicle.VehicleYearAction
): VehicleState {
  switch (action.type) {
    case fromVehicle.LOAD_YEARS: {
      return {
        ...state,
      };
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        year: action.payload,
      };
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        status: action.payload.status,
        type: action.payload.type,
        success: action.payload.success,
        year: action.payload.year,
      };
    }
  }
  return state;
}

export function makeReducer(
  state = makeInitialState,
  action: fromVehicle.VehicleMakeAction
): MakeState {
  switch (action.type) {
    case fromVehicle.LOAD_MAKE: {
      return {
        ...state,
      };
    }
    case fromVehicle.LOAD_MAKE_FAIL: {
      return {
        ...state,
        make: action.payload.make,
      };
    }
    case fromVehicle.LOAD_MAKE_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
        type: action.payload.type,
        success: action.payload.success,
        make: action.payload.make,
      };
    }
  }
  return state;
}

export const reducers: ActionReducerMap<any> = {
  yearReducer: yearReducer,
  makeReducer: makeReducer,
};
