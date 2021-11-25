import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { FormularioMDComponent } from './pages/formulario-md/formulario-md.component';
import { FormularioTDComponent } from './pages/formulario-td/formulario-td.component';
import { MDFormAddComponent } from './pages/mdform-add/mdform-add.component';
import { MDFormDelComponent } from './pages/mdform-del/mdform-del.component';
import { MDFormModComponent } from './pages/mdform-mod/mdform-mod.component';
import { TDFormAddComponent } from './pages/tdform-add/tdform-add.component';
import { TDFormDelComponent } from './pages/tdform-del/tdform-del.component';
import { TDFormModComponent } from './pages/tdform-mod/tdform-mod.component';

const routes: Routes = [  
  {path: "data", component: DataComponent},
  {path: "formularioMD", component: FormularioMDComponent},
  {path: "mdformadd", component: MDFormAddComponent},
  {path: "mdformmod", component: MDFormModComponent},
  {path: "mdformdel", component: MDFormDelComponent},
  {path: "tdformadd", component: TDFormAddComponent},
  {path: "tdformmod", component: TDFormModComponent},
  {path: "tdformdel", component: TDFormDelComponent},
  {path: "formularioTD", component: FormularioTDComponent},
  {path: '**', redirectTo: "/data", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
