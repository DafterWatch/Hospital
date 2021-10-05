import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarfichasComponent } from './sacarfichas.component';

describe('SacarfichasComponent', () => {
  let component: SacarfichasComponent;
  let fixture: ComponentFixture<SacarfichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacarfichasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarfichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
