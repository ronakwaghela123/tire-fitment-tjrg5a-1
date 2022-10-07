// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from '../actions/vehicle.action';

export interface VehicleState {
  type: string;
  status: string;
  success: boolean;
  year: string[];
}

export const initialState: VehicleState = {
  type: '',
  status: '',
  success: false,
  year: [],
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
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
      console.log(state);
      return {
        ...state,
        year: action.payload,
      };
    }
  }

  return state;
}
