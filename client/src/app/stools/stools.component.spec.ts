import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoolsComponent } from './stools.component';

describe('StoolsComponent', () => {
  let component: StoolsComponent;
  let fixture: ComponentFixture<StoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
