import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlogonComponent } from './slogon.component';

describe('SlogonComponent', () => {
  let component: SlogonComponent;
  let fixture: ComponentFixture<SlogonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlogonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
