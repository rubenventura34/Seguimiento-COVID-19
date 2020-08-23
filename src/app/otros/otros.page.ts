import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportesService } from '../services/reportes.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { duration } from 'moment';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit {

  postData = {
    dolor_de_cabeza:'',
    fiebre:'',
    tos:'',
    otros: '',
  }
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reportes: ReportesService,
    private loading : LoadingController,
    private toast : ToastController
  ) {
    this.route.queryParams.subscribe(params => {
      this.postData.dolor_de_cabeza = params.dolor_de_cabeza;
      this.postData.fiebre = params.fiebre;
      this.postData.tos = params.tos;
    });
  }

  ngOnInit() {
  }

  async finalizar(){
    const loading = await this.loading.create({
      message: 'Enviando reporte...'
    });
    loading.present();
    this.reportes.report(this.postData).then(r => {
      r.subscribe(async result => {
        const toast = await this.toast.create({
          message: result["mensaje"],
          duration: 2000
        });
        if(result["error"]){
          loading.dismiss();
          this.router.navigate(['/main/Inicio']);
        } else { 
          loading.dismiss();
          this.router.navigate(['/main/confirmacion']);
        }
        toast.present();
      },async error => {
        loading.dismiss();
        const toast = await this.toast.create({
          message: 'Error en la conexión.',
          duration: 2000
        });
        toast.present();
      });
    });
  }
}
