import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';

// localhost:4200
// localhost:4200/    Avaleht
// localhost:4200/ostukorv   Ostukorv
const routes: Routes = [
  { path: "", component: AvalehtComponent },
  { path: "ostukorv", component: OstukorvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
