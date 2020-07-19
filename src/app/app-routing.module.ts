import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PerfilComponent } from './perfil/perfil.component';
import {InventarioUiComponent} from './inventario-ui/inventario-ui.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'inventario-ui', component: InventarioUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
