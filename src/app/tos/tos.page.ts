import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.page.html',
  styleUrls: ['./tos.page.scss'],
})
export class TosPage implements OnInit {

  constructor(
    private navCtrl : NavController,
    private route : ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.dolor_de_cabeza = params.dolor_de_cabeza,
      this.fiebre = params.fiebre
    });
  }

  ngOnInit() {
  }
  dolor_de_cabeza:any;
  fiebre:any;

  rangeValue = 1;
  estado = "No";

  changeStatus(){
    switch (this.rangeValue) {
      case 1:
        this.estado = "No";
        break;
      case 2:
          this.estado = "Poco";
          break;
      case 3:
            this.estado = "Mucho";
            break;
      default:
        break;
    }
  }
  siguiente(){
    var navExtras: NavigationExtras = {
      queryParams: {
        dolor_de_cabeza: this.dolor_de_cabeza,
        fiebre: this.fiebre,
        tos: this.rangeValue
      }
    }
    
    this.navCtrl.navigateForward(["main/cansancio"], navExtras);
  }

}
