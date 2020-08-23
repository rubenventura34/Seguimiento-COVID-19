import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/Inicio',
    //redirectTo: '/induccion',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'induccion',
    loadChildren: () => import('./induccion/induccion.module').then( m => m.InduccionPageModule)
  },
  {
    path: 'ingresar-pariente',
    loadChildren: () => import('./ingresar-pariente/ingresar-pariente.module').then( m => m.IngresarParientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
