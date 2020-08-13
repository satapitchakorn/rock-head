import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventActionAddPageComponent } from './event-action-add-page.component';

describe('EventActionAddPageComponent', () => {
  let component: EventActionAddPageComponent;
  let fixture: ComponentFixture<EventActionAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventActionAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventActionAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
