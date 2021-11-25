import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from 'src/app/models/disco';

@Component({
  selector: 'app-formulario-td',
  templateUrl: './formulario-td.component.html',
  styleUrls: ['./formulario-td.component.css']
})
export class FormularioTDComponent implements OnInit {
public disco: Disco;
  constructor() {
    this.disco = new Disco(0,"","",0);
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.disco);
  }
}
