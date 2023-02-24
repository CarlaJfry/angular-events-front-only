import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNewPageComponent } from './event-new-page.component';

describe('EventNewPageComponent', () => {
  let component: EventNewPageComponent;
  let fixture: ComponentFixture<EventNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventNewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
