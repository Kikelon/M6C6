import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/models/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})



export class DataComponent implements OnInit {

  // Atributos
  
  public discos : Disco[];
  
  // Constructor
  
  constructor(private apiService: DiscoService) { 
    this.apiService.obtenerDiscos().subscribe((data: any) =>
    {
      this.discos = data;
    })    
  }

  // Métodos

  ngOnInit(): void {
  }

}
