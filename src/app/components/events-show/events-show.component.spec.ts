import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShowComponent } from './events-show.component';

describe('EventsShowComponent', () => {
  let component: EventsShowComponent;
  let fixture: ComponentFixture<EventsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
