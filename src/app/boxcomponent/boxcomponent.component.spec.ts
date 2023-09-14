import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxcomponentComponent } from './boxcomponent.component';

describe('BoxcomponentComponent', () => {
  let component: BoxcomponentComponent;
  let fixture: ComponentFixture<BoxcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxcomponentComponent]
    });
    fixture = TestBed.createComponent(BoxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
