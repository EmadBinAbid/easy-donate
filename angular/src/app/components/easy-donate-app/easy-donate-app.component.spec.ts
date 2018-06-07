import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateAppComponent } from './easy-donate-app.component';

describe('EasyDonateAppComponent', () => {
  let component: EasyDonateAppComponent;
  let fixture: ComponentFixture<EasyDonateAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
