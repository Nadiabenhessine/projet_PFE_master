import { TestBed } from '@angular/core/testing';

import { CategoriesRestaurantsService } from './categories-restaurants.service';

describe('CategoriesRestaurantsService', () => {
  let service: CategoriesRestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesRestaurantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
