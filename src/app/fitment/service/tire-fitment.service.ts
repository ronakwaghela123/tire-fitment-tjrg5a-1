import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../shared/service/http.service';
import Url from '../../shared/_helpers/url';

@Injectable()
export class TireFitmentService {
  private _url = Url;
  constructor(private _httpService: HttpService, private http: HttpClient) {}

  public getYears(): Observable<any> {
    console.log('in');
    return this._httpService.getData(this._url.GET_YEARS_URL).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  private ApiURL: string = 'https://6080be3273292b0017cdbf2a.mockapi.io/years';

  getToDos(): Observable<any[]> {
    console.log('in');
    return this.http.get<any[]>(this.ApiURL);
  }

  public getMake(param: any): Observable<Array<any>> {
    return this._httpService
      .getDataWithParams(param, this._url.GET_MAKES_URL)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public getModals(param: any): Observable<Array<any>> {
    return this._httpService
      .getDataWithParams(param, this._url.GET_MODELS_URL)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public getTrim(param: any): Observable<Array<any>> {
    return this._httpService
      .getDataWithParams(param, this._url.GET_TRIM_URL)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
