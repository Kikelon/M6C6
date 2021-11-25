import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-tdform-mod',
  templateUrl: './tdform-mod.component.html',
  styleUrls: ['./tdform-mod.component.css']
})

export class TDFormModComponent implements OnInit {

  public disco: Disco;
  public discos: Disco[];

  constructor(private apiService: DiscoService) {
    this.disco = new Disco(0,"","",0);
   }

  onSubmit(form:NgForm){
    if (form.valid){
      const newDisco = new Disco (form.value.id, form.value.titulo, form.value.interprete, form.value.anyoPublicacion);
      this.apiService.actualizarDisco(newDisco).subscribe((data: any) =>
      {
        this.discos = data;
      })
    }
  }
  ngOnInit(): void {
  }

}
