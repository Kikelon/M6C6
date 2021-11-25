import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';
@Component({
  selector: 'app-mdform-mod',
  templateUrl: './mdform-mod.component.html',
  styleUrls: ['./mdform-mod.component.css']
})

export class MDFormModComponent implements OnInit {

  //ATRIBUTOS

  public formularioMD : FormGroup;
  public disco : Disco;
  public discos : Disco[];

  //CONSTRUCTOR

  constructor(private apiService: DiscoService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { 
    this.buildForm();   
  }

  public modDisco (){
    const modDisco = new Disco (this.formularioMD.value.id, this.formularioMD.value.titulo, this.formularioMD.value.interprete, this.formularioMD.value.anyoPublicacion);
    this.apiService.actualizarDisco(modDisco).subscribe((data: any) =>
    {
      this.discos = data;
    })
  };

  private buildForm(){
    const primerDisco = 1902;
    const anyo = 2021;
    this.formularioMD = this.formBuilder.group({
      id: [, Validators.required],
      titulo: [, Validators.required],
      interprete: [, Validators.required],
      anyoPublicacion: [,  [Validators.required, Validators.min(primerDisco), Validators.max(anyo)]]
    });
  }

  ngOnInit(): void {
  }

}
