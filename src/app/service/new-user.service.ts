import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor( private _http: HttpClient) { }
  public newUserRegFromRemote(user : User):Observable<any>{
   return this._http.post("http://localhost:8089/registeruser",user)



  }
}
