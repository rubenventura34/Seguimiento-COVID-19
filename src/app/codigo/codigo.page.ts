import { Component, OnInit } from '@angular/core';
import  QRCode  from 'qrcode';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {
  ngOnInit(){
    this.process();
  }

  code = 'some sample string';
  generated = '';

  

  constructor(private storageService : StorageService) {

  }

  userInfo = [];
  

  process() {
    const qrcode = QRCode;
    const self = this;
    var opts = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 1,
      margin: 1,
      color: {
        dark:"#464d58",
        light: "#efefef"
      }
    }
    this.storageService.get("sessionData").then(sessionData => {
      this.userInfo.push({
        token: sessionData.userData.api_token
      });
      qrcode.toDataURL(JSON.stringify(this.userInfo), opts).then(data => {
        this.generated = data;
      });
    });

    
    /* QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
      if (error) console.error(error)
      console.log('success!');
    }) */
  }
}
