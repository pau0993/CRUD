import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { ApiServiceService } from '../services/api.service.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public load: Boolean = false;
  query = '';
  libros:any=[];

  constructor(public apiServiceService:ApiServiceService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 3000);

    this.getLibros();
  }



  getLibros():void {
    this.apiServiceService.getLibros().subscribe(response => {
      console.log(response)
      return this.libros=response
    });
  }


  eliminar(id_libro:string){
    this.apiServiceService.borrarLibro(id_libro).subscribe( 
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

  
  botonSearchLibro(query:string): void {
    this.apiServiceService.searchLibro(query).subscribe(
      res=>{
        this.libros = res;
        console.log(res);
      },
      error=> {
        console.log(error);
      });
  }

}