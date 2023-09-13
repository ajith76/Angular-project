import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxcomponentComponent } from './color-boxcomponent.component';

describe('ColorBoxcomponentComponent', () => {
  let component: ColorBoxcomponentComponent;
  let fixture: ComponentFixture<ColorBoxcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorBoxcomponentComponent]
    });
    fixture = TestBed.createComponent(ColorBoxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
