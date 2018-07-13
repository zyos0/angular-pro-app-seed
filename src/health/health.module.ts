import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../auth/shared/guards/auth.guard";
import {SharedModule} from "./shared/shared.module";

const ROUTES: Routes = [
  {path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module#MealsModule'},
  {path: 'workouts', canActivate: [AuthGuard], loadChildren: './workouts/workouts.module#WorkoutsModule'},
  {path: 'schedule', canActivate: [AuthGuard], loadChildren: './schedule/schedule.module#ScheduleModule'}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule.forRoot()],
  declarations: [],
  providers: []
})
export class HealthModule {

}
