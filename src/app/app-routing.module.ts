import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { CatalogoComponent } from './modules/inicio/pages/catalogo/catalogo.component';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: '',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
