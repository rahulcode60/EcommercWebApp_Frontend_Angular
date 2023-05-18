import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient : HttpClient) { }

  regUser(user:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/user/register',user);
  }

  loginUser(userLogin:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/user/login',userLogin);
  }
}
