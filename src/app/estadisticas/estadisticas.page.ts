import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportesService } from '../services/reportes.service';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})

export class EstadisticasPage implements OnInit {
  @ViewChild('chart', null) canvasChart;
  constructor(
    private reportes: ReportesService
  ) { }

  ngOnInit() {
    var fechaDeHoy = new Date();

      this.dias =  [
          (fechaDeHoy.getDate() - 6),
          (fechaDeHoy.getDate() - 5),
          (fechaDeHoy.getDate() - 4),
          (fechaDeHoy.getDate() - 3),
          (fechaDeHoy.getDate() - 2),
          "Ayer",
          "Hoy"
      ];
    this.reportes.getLastReports().then(reportes => {
      reportes.subscribe(r => {
        this.ultimosReportes = r;
      })
    });
  }
  lines:any;
  
  ionViewDidEnter(){
    this.createChart();
  }
  ultimosReportes:any;
  dias: any;
  public createChart() {
    this.lines = new Chart(this.canvasChart.nativeElement, {

        type: 'line',
        data: {
            labels: this.dias,
            datasets: [
              {
                label: 'Dolor de Cabeza',
                fill: false,
                backgroundColor: '#74B55A',
                borderColor: '#74B55A',
                data: this.ultimosReportes.dolor_de_cabeza,
                spanGaps: false,
            },{
                    label: 'Tos',
                    fill: false,
                    backgroundColor: '#B8977E',
                    borderColor: '#B8977E',
                    data: this.ultimosReportes.tos,
                    spanGaps: false,
                },{
                  label: 'Fiebre',
                  fill: false,
                  backgroundColor: '#976DD0',
                  borderColor: '#976DD0',
                  data: this.ultimosReportes.fiebre,
                  spanGaps: false,
              }
            ]
        },options: {
          title: {
            display: true,
            text: 'Progreso de tus sintomas'
          }
        }
    });
}

}
