import {ChangeDetectionStrategy, Component, EventEmitter, Output} from "@angular/core";
import {Meal, MealsService} from "../../../shared/meals/meals.service";
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'meal-form',
  styleUrls: ['meal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="meal-form">
      <form [formGroup]="form">
        <div class="meal-form__name">
          <label>
            <h3>Meal name</h3>
            <input type="text"
                   placeholder="e.g. English Breakfast"
                   formControlName="name">
            <div class="error" *ngIf="required">
              Workout name is Required
            </div>
          </label>
        </div>


        <div class="meal-form__food">
          <div class="meal-form__subtitle">
            <h3>Food</h3>
            <button type="button" class="meal-form__add"
                    (click)="addIngredient()">
              <img src="/img/add-white.svg">
              Add Food
            </button>
          </div>

          <div formArrayName="ingredients">
            <label *ngFor="let c of ingredients.controls; index as i">
              <input [formControlName]="i" placeholder="e.g. Eggs">
              <span
                class="meal-form__remove"
                (click)="removeIngredient(i)"
              ></span>
            </label>

          </div>

        </div>


        <div class="meal-form__submit">
          <div>
            <button type="button" class="button"
                    (click)="createMeal()">
              Create meal
            </button>
            <a class="button button--cancel" [routerLink]="['../']">
              Cancel
            </a>
          </div>
        </div>
      </form>

    </div>
  `
})
export class MealFormComponent {

  @Output()
  create: EventEmitter<Meal> = new EventEmitter<Meal>();
  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });


  constructor(
    private fb: FormBuilder,
    private mealService: MealsService
  ) {
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    )
  }


  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''))
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value as Meal);
    }
  }


}
