import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { FormularioMDComponent } from './pages/formulario-md/formulario-md.component';
import { FormularioTDComponent } from './pages/formulario-td/formulario-td.component';

const routes: Routes = [  
  {path: "data", component: DataComponent},
  {path: "formularioMD", component: FormularioMDComponent},
  {path: "formularioTD", component: FormularioTDComponent},
  {path: '**', redirectTo: "/data", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
