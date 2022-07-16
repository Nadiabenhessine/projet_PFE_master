import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesProduitsComponent } from './categories-produits.component';

describe('CategoriesProduitsComponent', () => {
  let component: CategoriesProduitsComponent;
  let fixture: ComponentFixture<CategoriesProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
