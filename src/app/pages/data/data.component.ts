import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DiscoService } from 'src/app/shared/disco.service';
import {MatTableDataSource} from '@angular/material/table';


export interface disco {
  id : number;
  titulo: string;
  artista: string;
  anyoPublicacion: number;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})



export class DataComponent implements OnInit {
  
  // Atributos

  public displayedColumns: string[] = ['id', 'titulo','interprete', 'anyoPublicacion'];
  public dataSource:  MatTableDataSource<disco>;
  public noData: any;

   // Constructor
  
  constructor(private apiService: DiscoService) { 
    // this.dataSource = new MatTableDataSource([]);
    // this.dataSource.data=[];
    
    
    this.apiService.obtenerDiscos().subscribe((data: any) =>
    {
      this.dataSource = data;
    }) 
  }


  // Métodos
  
  refrescar(){
    this.apiService.obtenerDiscos().subscribe((data: any) =>
    {
      this.dataSource = data;
    }) 
  }

   ngOnInit(): void {
  }
}
