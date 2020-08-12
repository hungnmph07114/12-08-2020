import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmainComponent } from './clientmain.component';

describe('ClientmainComponent', () => {
  let component: ClientmainComponent;
  let fixture: ComponentFixture<ClientmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
