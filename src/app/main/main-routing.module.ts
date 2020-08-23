import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'Inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'dolordecabeza',
        loadChildren: () => import('../dolordecabeza/dolordecabeza.module').then( m => m.DolordecabezaPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'fiebre',
        loadChildren: () => import('../fiebre/fiebre.module').then( m => m.FiebrePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'tos',
        loadChildren: () => import('../tos/tos.module').then( m => m.TosPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'cansancio',
        loadChildren: () => import('../cansancio/cansancio.module').then( m => m.CansancioPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'otros',
        loadChildren: () => import('../otros/otros.module').then( m => m.OtrosPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'recomendaciones',
        loadChildren: () => import('../recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('../noticias/noticias.module').then( m => m.NoticiasPageModule)
      },
      {
        path: 'noticia/:id',
        loadChildren: () => import('../noticia/noticia.module').then( m => m.NoticiaPageModule)
      },
      {
        path: 'datos',
        loadChildren: () => import('../datos/datos.module').then( m => m.DatosPageModule)
      },
      {
        path: 'confirmacion',
        loadChildren: () => import('../confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'estadisticas',
        loadChildren: () => import('../estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'ayuda',
        loadChildren: () => import('../ayuda/ayuda.module').then( m => m.AyudaPageModule)
      },
      {
        path: 'codigo',
        loadChildren: () => import('../codigo/codigo.module').then( m => m.CodigoPageModule)
      }
    ]
  },
  {
      path: '',
      redirectTo: '/main/Inicio',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
