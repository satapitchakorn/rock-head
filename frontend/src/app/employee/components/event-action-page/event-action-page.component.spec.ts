import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventActionPageComponent } from './event-action-page.component';

describe('EventActionPageComponent', () => {
  let component: EventActionPageComponent;
  let fixture: ComponentFixture<EventActionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventActionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventActionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
