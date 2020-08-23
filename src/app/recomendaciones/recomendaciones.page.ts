import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {
  gifUrl = '';
  titulo = '';
  indicacion = '';
  recomendaciones = [
    {
      titulo: 'Lávese las manos frecuentemente',
      descripcion: 'Lávese las manos con frecuencia con un desinfectante de manos a base de alcohol o con agua y jabón.',
      icono: '3.jpg',
      gif: 'https://www.who.int/images/default-source/searo---images/emergencies/covid19/how-to-protect/action-to-protect/covid-how-to-protect-yourself-02.gif?sfvrsn=10798f71_2'
    },
    {
      titulo: 'Adopte medidas de higiene respiratoria',
      descripcion: 'Cúbrete la boca con el entrebazo al toser o estornudar',
      icono: '4.png',
      gif: 'https://www.who.int/images/default-source/searo---images/emergencies/covid19/how-to-protect/action-to-protect/covid-how-to-protect-yourself-03.gif?sfvrsn=9d99a261_2'
    },
    {
      titulo: 'Mantenga el distanciamiento social',
      descripcion: 'Evita todo tipo de aglomeraciones',
      icono: '2.jpg',
      gif: 'https://www.who.int/images/default-source/searo---images/emergencies/covid19/how-to-protect/rural-settings/rural-protection-from-covid-04.gif?sfvrsn=6d581b39_2'
    },
    {
      titulo: 'Evita contacto fisico',
      descripcion: 'No saludes de mano, beso, abrazo ni otro contacto fisico',
      icono: '5.png',
      gif: 'https://www.who.int/images/default-source/searo---images/emergencies/covid19/how-to-protect/stay-healthy-at-home/stay-healthy-at-home-gif02.gif?sfvrsn=ae1ed4ba_2'
    },
    {
      titulo: 'Quedate en casa',
      descripcion: 'Sal de casa solo cuando sea estrictamente necesario',
      icono: '1.jpg',
      gif: 'https://www.who.int/images/default-source/searo---images/emergencies/covid19/how-to-protect/action-to-protect/covid-how-to-protect-yourself-01.gif?sfvrsn=65e2d390_2'
    },
    {
      titulo: 'Mantén la calma',
      descripcion: 'Mantén la calma y evita el panico',
      icono: '6.png',
      gif: 'https://www.who.int/images/default-source/searo---images/emergencies/covid19/how-to-protect/stay-healthy-at-home/1-stay-positive.gif?sfvrsn=d1d6b863_2'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  showModal(index){
    this.gifUrl = this.recomendaciones[index].gif;
    this.titulo = this.recomendaciones[index].titulo;
    this.indicacion = this.recomendaciones[index].descripcion;
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  hideModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

}
