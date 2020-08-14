import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventActionModifyPageComponent } from './event-action-modify-page.component';

describe('EventActionModifyPageComponent', () => {
  let component: EventActionModifyPageComponent;
  let fixture: ComponentFixture<EventActionModifyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventActionModifyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventActionModifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
