import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtablesComponent } from './customtables.component';

describe('CustomtablesComponent', () => {
  let component: CustomtablesComponent;
  let fixture: ComponentFixture<CustomtablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomtablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
