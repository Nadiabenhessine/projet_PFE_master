import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesRestaurantComponent } from './categories-restaurant.component';

describe('CategoriesRestaurantComponent', () => {
  let component: CategoriesRestaurantComponent;
  let fixture: ComponentFixture<CategoriesRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
