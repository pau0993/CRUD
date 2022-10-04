import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { ApiServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  libroNuevo: Libro={id_libro:'', titulo:'', autor:'', editorial:''};

  constructor(public apiServiceService: ApiServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarLibro(){
    this.apiServiceService.guardarLibros(this.libroNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/listado']);
      },
      err=>console.log(err)
    );
  }
}
