import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { EditarComponent } from './COMPONENTES/editar/editar.component';
import { HomeComponent } from './home/home.component';
import {MisionComponent} from './mision/mision.component';
import {VisionComponent} from './vision/vision.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'mision', component:MisionComponent},
  {path:'vision', component:VisionComponent},
  {path:'objetivo', component:ObjetivoComponent},
  {path:'listado', component:ListadoComponent},
  {path:'editar/:id_libro', component:EditarComponent},
  {path:'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
