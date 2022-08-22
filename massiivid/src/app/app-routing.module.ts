import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NimedComponent } from './nimed/nimed.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "", redirectTo: "/nimed", pathMatch: "full" },
  { path: "nimed", component: NimedComponent },
  { path: "users", component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
