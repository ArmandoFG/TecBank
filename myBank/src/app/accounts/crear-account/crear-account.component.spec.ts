import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAccountComponent } from './crear-account.component';

describe('CrearAccountComponent', () => {
  let component: CrearAccountComponent;
  let fixture: ComponentFixture<CrearAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
