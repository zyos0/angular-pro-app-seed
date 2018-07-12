import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./containers/register/register.component";
import {SharedModule} from "../shared/shared.module";

const ROUTES: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    RegisterComponent
  ]

})
export class RegisterModule {

}
