import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';

// localhost:4200
// localhost:4200/    avaleht
// localhost:4200/ostukorv   ostukorv
// localhost:4200/poed       poed
const routes: Routes = [
  { path: "", component: AvalehtComponent },
  { path: "ostukorv", component: OstukorvComponent },
  { path: "poed", component: PoedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
