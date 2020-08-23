import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { ReportesService } from '../services/reportes.service';
import * as moment from 'moment';
import { ToastController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UserType } from '../enums/user-type.enum';
@Component({
  selector: 'app-folder',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public folder: string;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private storage: StorageService,
    private reportes: ReportesService,
    private toast: ToastController,
    private alert: AlertController,
    private auth: AuthService
    ) { }
  ultimosReportes : any;

  fechaDeHoy:any;
  dias:any;
  userType: null;
  ngOnInit() {
    this.auth.getUserType().then(userType => {
      this.userType = userType;
      console.log(this.userType);
    });
  }
  ionViewWillEnter(){
    if (this.userType == UserType.PACIENTE || this.userType == UserType.FAMILIAR) {
      this.getReports();
    }
  }
  getReports(){
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.reportes.getLastReports().then(reportes => {
      reportes.subscribe(r => {
        this.ultimosReportes = r;
      })
    });
    this.fechaDeHoy = new Date();
    moment.lang("es");
    this.dias =  [
      [this.formatted_day(6), this.formatted_day(6, "dddd")],
      [this.formatted_day(5), this.formatted_day(5, "dddd")],
      [this.formatted_day(4), this.formatted_day(4, "dddd")],
      [this.formatted_day(3), this.formatted_day(3, "dddd")],
      [this.formatted_day(2), this.formatted_day(2, "dddd")],
      this.formatted_day(1),
      moment().format("DD MMM YYYY")
    ];
  }
  async doEvaluation(again=false){
    if(this.ultimosReportes['fiebre'][6] && !again) {
      
      const alert = await this.alert.create({
        header: 'Ya has enviado tu informe este dia!',
        message: `Agradecemos tu colaboración y esfuerzo, recuerda volver a enviar tu estado mañana.<br>
        Si deseas volver a realizar la evaluación presiona "Repetir"`,
        buttons: [{
          cssClass: 'secondary',
          text: 'Repetir',
          handler: () => {
            this.doEvaluation(true);
          }
        },{
            cssClass: 'primary',
            text: 'De Acuerdo'
          }
        ]
      });
    
      await alert.present();

      
    
      
    } else {
    this.router.navigate(["/main/dolordecabeza"]);
    }
  }
  formatted_day(days, format="DD MMM YYYY"){
    return moment().subtract(days,'d').format(format)
  }
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

}
