import { TestBed } from '@angular/core/testing';

import { RecetteJourService } from './recette-jour.service';

describe('RecetteJourService', () => {
  let service: RecetteJourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetteJourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
