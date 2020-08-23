import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { UserType } from '../enums/user-type.enum';
import { Router } from '@angular/router';
@Component({
  selector: 'app-induccion',
  templateUrl: './induccion.page.html',
  styleUrls: ['./induccion.page.scss'],
})

export class InduccionPage implements OnInit {
  @ViewChild('slides', { read: IonSlides, static: true }) slides: IonSlides;
  constructor(
      private router: Router,
      private storage: StorageService,
    ) { }

  ngOnInit() {
  }
  next() {
    this.slides.slideNext();
  }
  loginAsGuest(){
    const sessionData = {
            userType: UserType.VISITANTE,
          }
          this.storage.store('sessionData', sessionData).catch(err=>{
            console.log(err);
          });
          
    this.router.navigate(['/main/Inicio']).catch(err=>console.error(err));
  }

}
