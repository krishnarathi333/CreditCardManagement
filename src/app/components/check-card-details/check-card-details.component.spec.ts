import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCardDetailsComponent } from './check-card-details.component';

describe('CheckCardDetailsComponent', () => {
  let component: CheckCardDetailsComponent;
  let fixture: ComponentFixture<CheckCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
