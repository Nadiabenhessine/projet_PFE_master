import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireLivreurVendeurComponent } from './inscrire-livreur-vendeur.component';

describe('InscrireLivreurVendeurComponent', () => {
  let component: InscrireLivreurVendeurComponent;
  let fixture: ComponentFixture<InscrireLivreurVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrireLivreurVendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrireLivreurVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
