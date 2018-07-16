import {Injectable} from "@angular/core";
import {Store} from "store";
import {AngularFireDatabase} from "angularfire2/database";
import {AuthService} from "../../../../auth/shared/services/auth/auth.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import "rxjs/add/observable/of";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

export interface Meal {
  name: string;
  ingredients: string[],
  timestamp: number,
  $key: string,
  $exists: () => boolean
}

@Injectable()
export class MealsService {

  meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`)
    .do(next => this.store.set('meals', next));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {

  }

  get uid() {
    return this.authService.user.uid;
  }


  addMeal(meal: Meal) {
    return this.db
      .list(`meals/${this.uid}`)
      .push(meal)
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }

  updateMeal(key: string, meal: Meal) {
    return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  }

  getMeal(key: string) {
    if (!key) return Observable.of({});
    return this.store.select<Meal[]>('meals')
      .filter(Boolean)
      .map(meals => {
        return meals.find((meal: Meal) => meal.$key === key)
      })

  }
}
