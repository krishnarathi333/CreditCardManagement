import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailViewComponent } from './card-detail-view.component';

describe('CardDetailViewComponent', () => {
  let component: CardDetailViewComponent;
  let fixture: ComponentFixture<CardDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
