import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateHeaderComponent } from './easy-donate-header.component';

describe('EasyDonateHeaderComponent', () => {
  let component: EasyDonateHeaderComponent;
  let fixture: ComponentFixture<EasyDonateHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
