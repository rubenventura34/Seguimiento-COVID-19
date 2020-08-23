import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController, MenuController, Platform } from '@ionic/angular';
import { UserType } from '../enums/user-type.enum';
@Component({
  selector: 'app-ingresar-pariente',
  templateUrl: './ingresar-pariente.page.html',
  styleUrls: ['./ingresar-pariente.page.scss'],
})
export class IngresarParientePage implements OnInit {

  constructor(private auth: AuthService,
    private storage: StorageService,
    private router: Router,
    private loading: LoadingController,
    private toast: ToastController,
    public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  postData = {
    codigo: ''
  }
  validar() {
    let codigo = this.postData.codigo.trim();
    return (
    this.postData.codigo &&
    codigo.length > 0
    );
  }
  async ingresar(){
    if(this.validar()){
      const loading = await this.loading.create({
        message:'Ingresando...'
      });
      loading.present();
      this.auth.loginAsRelative(this.postData).subscribe(async res => {
        if(res.isValid){
          const sessionData = {
            userType: UserType.FAMILIAR,
            userData: res.userData
          }
          this.storage.store('sessionData', sessionData).catch(err=>{
            console.log(err);
          });
          loading.dismiss();
          
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
