import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  api_token='';
  constructor(private httpService : HttpService,
    private authService : AuthService
    ) {

      this.authService.getToken()

    }

  getLastReports(){
    return this.authService.getToken().then(token => {
      return this.httpService.get("getLastReports?api_token="+token, null);
    });
  }
  report(postData){
    return this.authService.getToken().then(token => {
      return this.httpService.post("reportar?api_token="+token, postData);
    });
  }
}
