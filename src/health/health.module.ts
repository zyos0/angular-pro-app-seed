import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  {path: 'meals', loadChildren: './meals/meals.module#MealsModule'},
  {path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsModule'},
  {path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [],
  providers: []
})
export class HealthModule {

}
