import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventActionRemovePageComponent } from './event-action-remove-page.component';

describe('EventActionRemovePageComponent', () => {
  let component: EventActionRemovePageComponent;
  let fixture: ComponentFixture<EventActionRemovePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventActionRemovePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventActionRemovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
