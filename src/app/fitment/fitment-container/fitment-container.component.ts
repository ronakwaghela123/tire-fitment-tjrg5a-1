import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TireFitmentService } from '../service/tire-fitment.service';
import * as fromVehicle from '../store/actions/vehicle.action';

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css'],
})
export class FitmentContainerComponent implements OnInit {
  public yearList: Array<any> = [];
  public makeList: Array<any> = [];
  public modelsList: Array<any> = [];
  public trimList: Array<any> = [];
  public selectedFitmentData: Array<any> = [];
  public isTabActive: string = 'year';
  public todo$: Observable<any>;
  private _tire_fitment_subscription: Subscription = new Subscription();
  constructor(
    private _tireFitmentService: TireFitmentService,
    private store: Store<any>
  ) {
    store.select('vehicle').subscribe((data) => {
      if (
        data.yearReducer.success == true &&
        data.yearReducer.year.length > 0
      ) {
        this.yearList = data.yearReducer.year;
      }
    });
  }

  ngOnInit() {
    this.getYears();
  }

  public getYears() {
    console.log('innnnn');
    this.store.dispatch(new fromVehicle.LoadYears());
  }

  public getMake(data) {
    let requestParam = {
      year: data,
    };
    this.store.dispatch(new fromVehicle.LoadMake());
    this.store.select('vehicle').subscribe((data) => {
      console.log(data);
      if (
        data.makeReducer.success == true &&
        data.makeReducer.make.length > 0
      ) {
        this.makeList = data.makeReducer.make;
      }
    });
  }
  public getModels(data) {
    let requestParam = {
      make: data,
    };
    this._tire_fitment_subscription.add(
      this._tireFitmentService
        .getModals(requestParam)
        .subscribe((response: any) => {
          if (response.success === true && response.model.length > 0) {
            this.modelsList = response.model;
          }
        })
    );
  }
  public getTrim(data) {
    let requestParam = {
      model: data,
    };
    this._tire_fitment_subscription.add(
      this._tireFitmentService
        .getTrim(requestParam)
        .subscribe((response: any) => {
          if (response.success === true && response.trim.length > 0) {
            this.trimList = response.trim;
          }
        })
    );
  }

  public onSelectFitment(data, type, nextType) {
    this.selectedFitmentData.push(data);
    this.isTabActive = nextType;
    if (type === 'year') {
      this.getMake(data);
    } else if (type === 'make') {
      this.getModels(data);
    } else if (type === 'models') {
      this.getTrim(data);
    }
  }

  public resetFitment() {
    this.selectedFitmentData = [];
    this.isTabActive = 'year';
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
