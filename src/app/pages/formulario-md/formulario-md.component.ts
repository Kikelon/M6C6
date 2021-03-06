import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';


@Component({
  selector: 'app-formulario-md',
  templateUrl: './formulario-md.component.html',
  styleUrls: ['./formulario-md.component.css']
})

export class FormularioMDComponent implements OnInit {

  //ATRIBUTOS

  public formularioMD : FormGroup;
  public disco : Disco;
  public discos : Disco[];

  //CONSTRUCTOR

  constructor(private apiService: DiscoService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { 
    this.buildForm();
  }

  public addDisco(){
    const newDisco = new Disco (0, this.formularioMD.value.titulo, this.formularioMD.value.artista, parseInt(this.formularioMD.value.anyoPublicacion));
    this.apiService.añadirDisco(newDisco).subscribe((data: any) =>
    {
      this.discos = data;
    })
  }
  public delDisco(){
    this.apiService.borrarDisco(parseInt(this.formularioMD.value.id)).subscribe((data: any) =>
    {
      this.discos = data;
    })
    const error = false;

    // Informamos del resultado de la operación
    (!error) ? this.error(true, "borrar") : this.error(false, "borrar");
  };

  public modDisco(){
    const newDisco = new Disco (0, this.formularioMD.value.titulo, this.formularioMD.value.artista, parseInt(this.formularioMD.value.anyoPublicacion));
    this.apiService.actualizarDisco(newDisco).subscribe((data: any) =>
    {
      this.discos = data;
    })
    const error = false;

    // Informamos del resultado de la operación
    (!error) ? this.error(true, "modificar") : this.error(false, "modificar");

  };

  private error(message: boolean, operacion : string) {
    if (message){
      this._snackBar.open('Operación ' + operacion + ' realizada con éxito', 'Cerrar', {duration: 1500});  
    } else {
      this._snackBar.open('No se pudo realizar la operación de ' + operacion, 'Cerrar', {duration: 1500});
    }    
  };

  private buildForm(){
    const primerDisco = 1902;
    const anyo = 2021;
    this.formularioMD = this.formBuilder.group({
      id: [, ],
      titulo: [, Validators.required],
      interprete: [, Validators.required],
      anyoPublicacion: [,  [Validators.required, Validators.min(primerDisco), Validators.max(anyo)]]
    });
  }

  ngOnInit(): void {
  }

}
