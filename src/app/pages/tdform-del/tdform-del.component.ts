import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-tdform-del',
  templateUrl: './tdform-del.component.html',
  styleUrls: ['./tdform-del.component.css']
})
export class TDFormDelComponent implements OnInit {


  public disco: Disco;
  
  constructor(private apiService: DiscoService) {
    this.disco = new Disco(0,"","",0);
  }

  onSubmit(form:NgForm){
    if (form.valid){
      this.apiService.borrarDisco(form.value.id).subscribe((data: any) =>
      {
        this.disco = data;
      })
    }
  }

  ngOnInit(): void {
  }


}
