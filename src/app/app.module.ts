import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioMDComponent } from './pages/formulario-md/formulario-md.component';
import { FormularioTDComponent } from './pages/formulario-td/formulario-td.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DataComponent } from './pages/data/data.component';
import { MDFormAddComponent } from './pages/mdform-add/mdform-add.component';
import { TDFormAddComponent } from './pages/tdform-add/tdform-add.component';
import { TDFormDelComponent } from './pages/tdform-del/tdform-del.component';
import { MDFormDelComponent } from './pages/mdform-del/mdform-del.component';
import { MDFormModComponent } from './pages/mdform-mod/mdform-mod.component';
import { TDFormModComponent } from './pages/tdform-mod/tdform-mod.component';


// Angualar Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { MatSnackBarModule } from '@angular/material/snack-bar';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormularioMDComponent,
    FormularioTDComponent,
    MenuComponent,
    DataComponent,
    MDFormAddComponent,
    TDFormAddComponent,
    TDFormDelComponent,
    MDFormDelComponent,
    MDFormModComponent,
    TDFormModComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
