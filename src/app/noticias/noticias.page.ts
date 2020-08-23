import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import xml2js from 'xml2js';
//declare var RSSParser;
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})

export class NoticiasPage implements OnInit {

  constructor(private http : HttpClient) { }
  twitterUrl = 'https://twitter.com/saludsv';
  account='presidente';
  ngOnInit() {
  }
  changeAccount(){
   switch (this.account) {
      case 'presidente':
         this.twitterUrl = 'https://twitter.com/nayibbukele';
         break;
      case 'salud':
         this.twitterUrl = 'https://twitter.com/saludsv';
         break;
      case 'ministro':
         this.twitterUrl = 'https://twitter.com/franalabi';
         break;
      case 'prensa':
         this.twitterUrl = 'https://twitter.com/secprensasv';
         break;
      default:
         break;
   }
  }
  ionViewWillEnter() {
  }
  
  

}
