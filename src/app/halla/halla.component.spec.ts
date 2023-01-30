import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallaComponent } from './halla.component';

describe('HallaComponent', () => {
  let component: HallaComponent;
  let fixture: ComponentFixture<HallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
