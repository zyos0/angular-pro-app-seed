import {NgModule} from "@angular/core";
import {MealsComponent} from "./containers/meals/meals.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";


export const ROUTES: Routes = [
  {path: '', component: MealsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [MealsComponent],
  providers: []
})
export class MealsModule {
}
