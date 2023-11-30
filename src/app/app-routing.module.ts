import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { AdminComponent } from './modules/admin/admin.component';


const routes: Routes = [
  {path:"",redirectTo:"/admin",pathMatch:"full"},
  {path:"admin",component:AdminComponent},
  {
    path: '',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {path:"**",redirectTo:"/admin",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
