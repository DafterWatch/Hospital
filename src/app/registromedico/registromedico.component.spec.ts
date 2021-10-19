import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistromedicoComponent } from './registromedico.component';

describe('RegistromedicoComponent', () => {
  let component: RegistromedicoComponent;
  let fixture: ComponentFixture<RegistromedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistromedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistromedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
