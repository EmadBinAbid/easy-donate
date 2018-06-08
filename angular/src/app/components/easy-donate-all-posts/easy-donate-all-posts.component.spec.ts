import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDonateAllPostsComponent } from './easy-donate-all-posts.component';

describe('EasyDonateAllPostsComponent', () => {
  let component: EasyDonateAllPostsComponent;
  let fixture: ComponentFixture<EasyDonateAllPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDonateAllPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDonateAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
