import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateHomeComponent } from './easy-donate-home.component';

describe('EasyDonateHomeComponent', () => {
  let component: EasyDonateHomeComponent;
  let fixture: ComponentFixture<EasyDonateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
