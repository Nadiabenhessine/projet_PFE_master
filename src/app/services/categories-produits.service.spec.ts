import { TestBed } from '@angular/core/testing';

import { CategoriesProduitsService } from './categories-produits.service';

describe('CategoriesProduitsService', () => {
  let service: CategoriesProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
