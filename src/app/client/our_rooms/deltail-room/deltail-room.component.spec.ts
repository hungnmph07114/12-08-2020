import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltailRoomComponent } from './deltail-room.component';

describe('DeltailRoomComponent', () => {
  let component: DeltailRoomComponent;
  let fixture: ComponentFixture<DeltailRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltailRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltailRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
