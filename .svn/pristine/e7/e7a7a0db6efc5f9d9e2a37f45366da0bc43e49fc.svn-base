import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private _http: HttpClient) { }
  public viewProfile(): Observable<any> {

    return this._http.get<any>("http://localhost:8089/profile");
    
    
    }
}
