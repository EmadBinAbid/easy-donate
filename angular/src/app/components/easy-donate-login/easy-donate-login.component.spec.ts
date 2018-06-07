import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateLoginComponent } from './easy-donate-login.component';

describe('EasyDonateLoginComponent', () => {
  let component: EasyDonateLoginComponent;
  let fixture: ComponentFixture<EasyDonateLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
