import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { UserType } from '../enums/user-type.enum';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/main/Inicio',
      icon: 'home',
      users: [UserType.FAMILIAR, UserType.PACIENTE, UserType.VISITANTE]
    },
    {
      title: 'Recomendaciones',
      url: '/main/recomendaciones',
      icon: 'bandage',
      users: [UserType.FAMILIAR, UserType.PACIENTE, UserType.VISITANTE]
    },
    {
      title: 'Mi Código QR',
      url: '/main/codigo',
      icon: 'qr-code',
      users: [UserType.PACIENTE]
    },
    {
      title: 'Noticias',
      url: '/main/noticias',
      icon: 'newspaper'
      ,
      users: [UserType.FAMILIAR, UserType.PACIENTE, UserType.VISITANTE]
    },
    {
      title: 'Datos',
      url: '/main/datos',
      icon: 'podium',
      users: [UserType.FAMILIAR, UserType.PACIENTE, UserType.VISITANTE]
    },
    {
      title: 'Ayuda',
      url: '/main/ayuda',
      icon: 'help',
      users: [UserType.FAMILIAR, UserType.PACIENTE, UserType.VISITANTE]
    },
    
    
  ];
  paciente = {
    nombre: '',
    dui: ''
  };
  isLogin = false;
  userType = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: StorageService,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }
  ionViewWillEnter(){
    this.storage.get('sessionData').then(sessionData => {
      if(sessionData) {
        this.userType = sessionData.userType;
        switch (this.userType) {
          case UserType.PACIENTE:
            this.paciente.nombre = sessionData.userData.nombres+" "+sessionData.userData.apellidos;
            this.paciente.dui = sessionData.userData.dui;
            break;
          case UserType.FAMILIAR:
            this.paciente.nombre = "FAMILIAR";
            this.paciente.dui = sessionData.userData.nombres+" "+sessionData.userData.apellidos;
            break;
          case UserType.VISITANTE:
            this.paciente.nombre = "VISITANTE";
            this.paciente.dui = "Seguimiento COVID-19";
            break;
        }

      
      this.isLogin = true;
      }
    });
  }
  logout(){
    this.auth.logout();
  }

}
