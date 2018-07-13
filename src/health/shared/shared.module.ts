import {ModuleWithProviders, NgModule} from "@angular/core";
//third party modules
import {AngularFireDatabaseModule} from "angularfire2/database";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MealsService} from "./meals/meals.service";




@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  declarations: [],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService]

    }
  }
}
