import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user :User): Observable<any> {

    return this._http.post<any>("http://localhost:8089/login", user);


}
}
