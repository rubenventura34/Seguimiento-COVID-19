import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private storage: StorageService,
    private router: Router
  ) { }

  login(postData: any): Observable<any>{
    return this.http.post('auth', postData);
  }
  loginAsRelative(postData: any): Observable<any> {
    return this.http.post('authParientes', postData);
  }
  logout(){
    this.storage.clear().then(res=>{
      this.router.navigate(['/induccion']);
    });
  }
  isLogin(){
    return new Promise((resolve) => {
      this.storage.get('sessionData').then(sessionData=>{
        if(sessionData){
          resolve(true);
        } else {
          this.router.navigate(['/induccion']);
          resolve(false);
        }
      });
    });
  }
  getToken(){
      return this.storage.get('sessionData').then(sessionData=>{
        if(sessionData){
          return sessionData.userData.api_token;
        } else {
          return '';
        }
      });
  }
  getUserType(){
    return this.storage.get('sessionData').then(sessionData=>{
        if(sessionData){
          return sessionData.userType;
        } else {
          return null;
        }
      });
  }
}
