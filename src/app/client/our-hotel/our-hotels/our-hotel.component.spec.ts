import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHotelComponent } from './our-hotel.component';

describe('BlogComponent', () => {
  let component: OurHotelComponent;
  let fixture: ComponentFixture<OurHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
