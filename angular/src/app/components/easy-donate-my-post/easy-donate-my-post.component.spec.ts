import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateMyPostComponent } from './easy-donate-my-post.component';

describe('EasyDonateMyPostComponent', () => {
  let component: EasyDonateMyPostComponent;
  let fixture: ComponentFixture<EasyDonateMyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateMyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateMyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
