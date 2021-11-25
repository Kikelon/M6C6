import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-mdform-del',
  templateUrl: './mdform-del.component.html',
  styleUrls: ['./mdform-del.component.css']
})
export class MDFormDelComponent implements OnInit {

  //ATRIBUTOS

  public formularioMD : FormGroup;
  public disco : Disco;
  public discos : Disco[];

  //CONSTRUCTOR

  constructor(private apiService: DiscoService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { 
    this.buildForm();   
  }

  public delDisco (){
    this.apiService.borrarDisco(parseInt(this.formularioMD.value.id)).subscribe((data: any) =>
    {
      this.discos = data;
    })
  };

  private buildForm(){
    const primerDisco = 1902;
    const anyo = 2021;
    this.formularioMD = this.formBuilder.group({
      id: [, Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
