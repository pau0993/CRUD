import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = environment.baseUrl;

  constructor( public http:HttpClient) { }

  getLibros() {
    return this.http.get<Libro[]>(this.baseUrl);
  }

  getUnLibro(id_libro: string):Observable<any> {
    return this.http.get(this.baseUrl+'/'+id_libro);
  }

  guardarLibros(Libro: Libro): Observable<any> {
    return this.http.post(this.baseUrl, Libro);
  }

  editarLibro(id_libro:any, Libro: Libro): Observable<any> {
    return this.http.put(this.baseUrl+'/'+id_libro, Libro);
  }

  borrarLibro(id_libro: string): Observable<any> {
    return this.http.delete(this.baseUrl+'/'+id_libro);
  }

  searchLibro(query: string): Observable<any> {
    return this.http.get<Libro[]>(this.baseUrl+'/search?query='+query);
  } 
}
