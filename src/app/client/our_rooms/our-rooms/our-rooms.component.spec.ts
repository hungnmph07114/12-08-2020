import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRoomsComponent } from './our-rooms.component';

describe('OurRoomsComponent', () => {
  let component: OurRoomsComponent;
  let fixture: ComponentFixture<OurRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
