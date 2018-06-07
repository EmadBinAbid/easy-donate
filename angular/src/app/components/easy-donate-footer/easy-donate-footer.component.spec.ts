import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateFooterComponent } from './easy-donate-footer.component';

describe('EasyDonateFooterComponent', () => {
  let component: EasyDonateFooterComponent;
  let fixture: ComponentFixture<EasyDonateFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
