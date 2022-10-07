import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  isSavingProgress: boolean = false;
  constructor(private http: HttpClient) {}

  public postData(payload: any, requrl: string): Observable<any> {
    const url = `${requrl}`;
    return this.http.post<any>(url, payload).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public getData(requrl: string) {
    const url = `${requrl}`;
    return this.http.get<any>(url);
  }

  public getDataWithParams(params: any, requrl: string) {
    const url = `${requrl}`;
    return this.http.get<any>(url, { params: params });
  }

  public deleteData(requrl: string) {
    const url = `${requrl}`;
    return this.http.delete<any>(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
