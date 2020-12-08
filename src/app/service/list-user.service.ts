import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(private http:HttpClient) {   }
    fetchUsersList():Observable<any>{
    return this.http.get<any>("http://localhost:8089/getuserslist");
    }
}
