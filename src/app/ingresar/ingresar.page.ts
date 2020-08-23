import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController, MenuController, Platform } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { Frases } from '../collections/frases.const';
import { UserType } from '../enums/user-type.enum';
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  constructor(
    private auth: AuthService,
    private storage: StorageService,
    private router: Router,
    private loading: LoadingController,
    private toast: ToastController,
    public menuCtrl: MenuController,
    private localNotifications: LocalNotifications,
    private platform: Platform
  ) {
  }
  postData = {
    dui: '',
    codigo: ''
  }
  ngOnInit() {
  }
  validar() {
    let dui = this.postData.dui.trim();
    let codigo = this.postData.codigo.trim();
    return (
    this.postData.dui &&
    this.postData.codigo &&
    dui.length > 0 &&
    codigo.length > 0
    );
  }
  async ingresar(){
    if(this.validar()){
      const loading = await this.loading.create({
        message:'Ingresando...'
      });
      loading.present();
      this.auth.login(this.postData).subscribe(async res => {
        if(res.isValid){
          const sessionData = {
            userType: UserType.PACIENTE,
            userData: res.userData
          }
          this.storage.store('sessionData', sessionData).catch(err=>{
            console.log(err);
          });
          loading.dismiss();
          if (this.platform.is("mobile")) {
            Frases.forEach((frase, index)=>{
              this.localNotifications.schedule({
                id: index,
                text: frase,
                trigger: {
                  in: index,
                  unit: ELocalNotificationTriggerUnit.DAY
                }
              });
            });
          }
          this.router.navigate(['/main/Inicio']).catch(err=>console.error(err));
        } else {
          loading.dismiss();
          const toast = await this.toast.create({
            message: 'Los datos no son validos',
            duration: 2000
          });
          toast.present();
        }
      },async error=>{
        loading.dismiss();
          const toast = await this.toast.create({
            message: 'Error de red.',
            duration: 2000
          });
          toast.present();
      });
    }
  }
}
