import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestComponentComponent } from './first-test-component.component';

describe('FirstTestComponentComponent', () => {
  let component: FirstTestComponentComponent;
  let fixture: ComponentFixture<FirstTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
