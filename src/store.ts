import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import {User} from './auth/shared/services/auth/auth.service';
import {Meal} from './health/shared/services/meals/meals.service';
import {Workout} from './health/shared/services/workouts/workouts.service';
import {ScheduleItem} from "./health/shared/services/schedule/schedule.service";

export interface State {
  user: User,
  meals: Meal[],
  date: Date,
  workouts: Workout[],
  schedule: ScheduleItem[],
  selected: any,

  [key: string]: any
}

const state: State = {
  user: undefined,
  meals: undefined,
  selected: undefined,
  schedule: undefined,
  date: undefined,
  workouts: undefined,
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    this.subject.next({...this.value, [name]: state});
  }

}
