import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dolordecabeza',
  templateUrl: './dolordecabeza.page.html',
  styleUrls: ['./dolordecabeza.page.scss'],
})
export class DolordecabezaPage implements OnInit {

  constructor(
    private router : Router,
    private navCtrl : NavController
    ) { }
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
    let navigationExtras : NavigationExtras = {
      queryParams: {
        dolor_de_cabeza: this.rangeValue
      }
    }
    this.navCtrl.navigateForward(["/main/fiebre"], navigationExtras);
  }
  ngOnInit() {
  }
  


}
