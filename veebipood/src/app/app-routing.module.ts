import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { MeistComponent } from './meist/meist.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';

// localhost:4200
// localhost:4200/    avaleht
// localhost:4200/ostukorv   ostukorv
// localhost:4200/poed       poed
const routes: Routes = [
  { path: "", component: KodulehtComponent },
  { path: "avaleht", component: AvalehtComponent },
  { path: "ostukorv", component: OstukorvComponent },
  { path: "poed", component: PoedComponent },
  { path: "lisa", component: LisaToodeComponent },
  { path: "toode/:nimi", component: YksikToodeComponent },
  { path: "halda", component: HaldaTooteidComponent },
  { path: "meist", component: MeistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
