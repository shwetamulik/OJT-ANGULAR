import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsubServiceService {

  constructor(private _http: HttpClient) { }
  public unsub(): Observable<any> {

    return this._http.get<any>("http://localhost:8089/unsubscribe");
    
    }
}

