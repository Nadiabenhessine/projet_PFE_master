import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilOperateurComponent } from './profil-operateur.component';

describe('ProfilOperateurComponent', () => {
  let component: ProfilOperateurComponent;
  let fixture: ComponentFixture<ProfilOperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilOperateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
