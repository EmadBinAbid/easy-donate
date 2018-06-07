import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateRegisterComponent } from './easy-donate-register.component';

describe('EasyDonateRegisterComponent', () => {
  let component: EasyDonateRegisterComponent;
  let fixture: ComponentFixture<EasyDonateRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
