import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  constructor(private http : HttpClient,
    private loadingCtrl: LoadingController) { }
  confirmados = "-";
  activos = "-";
  recuperados = "-";
  fallecidos = "-";
  actualizacion = "-";
  actualizacionResumen = "-";
  nuevosCasos = "-";
  nuevosRecuperados = "-";
  nuevosDecesos = "-";
  ngOnInit() {
    this.loadData();
  }
  async loadData(){
    const loading = await this.loadingCtrl.create({
      message: 'Obteniendo datos oficiales...',
      spinner: 'dots'
    });
    loading.present();
    this.http.get("https://rventuralazo.000webhostapp.com/covid19/data.php").subscribe(res => {  
    }, err => {
      var el = $( '<div></div>' );
      el.html(err.error.text);
      let data = $("body > script:nth-child(3)", el).prevObject["0"].children[19].innerHTML;
      
      let infographicData = JSON.parse(data.substring(23).slice(0, -1));
      
      this.confirmados =infographicData['elements']['content']['content']['entities']['f47481c2-a324-46bb-9357-5844973345cd']['props']['content']['blocks'][0]['text'];
      this.recuperados = infographicData['elements']['content']['content']['entities']['f4389629-ddf5-4d4e-bf15-3d6f28605dbc']['props']['content']['blocks'][0]['text'];
      this.activos = infographicData['elements']['content']['content']['entities']['02efa09c-df92-4488-9673-421b11745610']['props']['content']['blocks'][0]['text'];
      this.fallecidos = infographicData['elements']['content']['content']['entities']['4e150f58-b52b-47a1-bc62-20e2f5f31da1']['props']['content']['blocks'][0]['text'];
      this.actualizacion = infographicData['elements']['content']['content']['entities']['c8eca77e-695d-46f2-9b12-cc9fafb33f20']['props']['content']['blocks'][0]['text'];
      this.actualizacionResumen = infographicData['elements']['content']['content']['entities']['bc91cc19-3e8f-47ad-ab72-5ba435a984c3']['props']['content']['blocks'][0]['text'];
      let n = infographicData['elements']['content']['content']['entities']['4664926a-9e26-4adc-8bb3-f1d071f6afcf']['props']['chartData']['data'];
      this.nuevosCasos = $(n[0][0][0]).text();
      this.nuevosRecuperados = $(n[0][1][0]).text();
      this.nuevosDecesos = $(n[0][2][0]).text();
      loading.dismiss();
    }); 
  }

}
