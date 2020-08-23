import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  constructor(private http : HttpClient, private activatedRoute: ActivatedRoute) { }
  public id : number;
  ngOnInit() {
   
  }
  
}
