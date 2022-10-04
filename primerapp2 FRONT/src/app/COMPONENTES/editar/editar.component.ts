import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id_libro:string="";
  libroActual: Libro={id_libro:'', titulo:'', autor:'', editorial:''};


  constructor(public apiServiceService: ApiServiceService, 
              private activatedRoute: ActivatedRoute, 
              private router:Router) { }

  ngOnInit(): void {
    this.id_libro=this.activatedRoute.snapshot.params['id_libro'];    
    this.apiServiceService.getUnLibro(this.id_libro).subscribe(
      res=>{this.libroActual=res},
      err=>console.log(err)
    );
  }

  guardar(){
    this.apiServiceService.editarLibro(this.id_libro, this.libroActual).subscribe(
      res=>{
        this.router.navigate(['/listado']);
      },
      err=>console.log(err)
    );
  }

}
