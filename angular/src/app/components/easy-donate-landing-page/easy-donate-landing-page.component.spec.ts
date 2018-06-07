import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateLandingPageComponent } from './easy-donate-landing-page.component';

describe('EasyDonateLandingPageComponent', () => {
  let component: EasyDonateLandingPageComponent;
  let fixture: ComponentFixture<EasyDonateLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
