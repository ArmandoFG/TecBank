import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCardComponent } from './crear-card.component';

describe('CrearCardComponent', () => {
  let component: CrearCardComponent;
  let fixture: ComponentFixture<CrearCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
