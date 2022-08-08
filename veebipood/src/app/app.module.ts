import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { MeistComponent } from './meist/meist.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    PoedComponent,
    LisaToodeComponent,
    KodulehtComponent,
    YksikToodeComponent,
    HaldaTooteidComponent,
    MeistComponent,
    MuudaToodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
