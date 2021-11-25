import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';


@Component({
  selector: 'app-tdform-add',
  templateUrl: './tdform-add.component.html',
  styleUrls: ['./tdform-add.component.css']
})
export class TDFormAddComponent implements OnInit {

  public disco: Disco;
  public discos: Disco[];
  
  constructor(private apiService: DiscoService) {
    this.disco = new Disco(0,"","",0);
  }

  onSubmit(form:NgForm){
    if (form.valid){
    const newDisco = new Disco (0, form.value.titulo, form.value.interprete, form.value.anyoPublicacion);
    this.apiService.añadirDisco(newDisco).subscribe((data: any) =>
    {
      this.discos = data;
    })
    console.log(this.disco);
  }
  }

  ngOnInit(): void {
  }

}
