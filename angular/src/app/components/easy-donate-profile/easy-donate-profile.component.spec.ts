import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateProfileComponent } from './easy-donate-profile.component';

describe('EasyDonateProfileComponent', () => {
  let component: EasyDonateProfileComponent;
  let fixture: ComponentFixture<EasyDonateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
