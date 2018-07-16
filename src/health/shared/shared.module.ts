import {ModuleWithProviders, NgModule} from "@angular/core";
//third party modules
import {AngularFireDatabaseModule} from "angularfire2/database";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MealsService} from "./services/meals/meals.service";


//components
import {ListItemComponent} from './components/list-item/list-item.component'


@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
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
