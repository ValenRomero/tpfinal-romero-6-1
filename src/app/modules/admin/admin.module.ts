import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { TableComponent } from './components/table/table.component';
import{FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
  ],
  exports:[
    AdminComponent,
    TableComponent
  ]
})
export class AdminModule { }
