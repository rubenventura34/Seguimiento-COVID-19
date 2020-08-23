import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: String, data: any){
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, JSON.stringify(data), options);
  }
  get(serviceName: String, data: any){
    const url = environment.apiUrl + serviceName;
    return this.http.get(url);
  }

}
