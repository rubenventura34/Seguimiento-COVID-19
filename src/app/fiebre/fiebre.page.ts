import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fiebre',
  templateUrl: './fiebre.page.html',
  styleUrls: ['./fiebre.page.scss'],
})
export class FiebrePage implements OnInit {

  constructor(
    private router : Router,
    private navCtrl: NavController,
    private route: ActivatedRoute
    ) {
      this.route.queryParams.subscribe(params => {
        if(params){
          this.dolor_de_cabeza = params.dolor_de_cabeza
        }
      });
    }
  dolor_de_cabeza:any;
  ngOnInit() {
  }

  rangeValue = 1;
  estado = "Normal";
  temperatura = "(~36°C-37,5°C)";
  changeStatus(){
    switch (this.rangeValue) {
      case 1:
        this.estado = "Normal";
        this.temperatura = "(~36°C-37,5°C)";
        break;
      case 2:
          this.estado = "Media";
          this.temperatura = "(~37,5°C-39,5°C)";
          break;
      case 3:
            this.estado = "Alta";
            this.temperatura = "(>39,5°C)";
            break;
      default:
        break;
    }
  }
  siguiente(){
    var navExtras: NavigationExtras = {
      queryParams: {
        dolor_de_cabeza: this.dolor_de_cabeza,
        fiebre: this.rangeValue
      }
    }
    this.navCtrl.navigateForward(["main/tos"], navExtras);
  }
}
