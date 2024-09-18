import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenWearComponent } from './women-wear.component';

describe('WomenWearComponent', () => {
  let component: WomenWearComponent;
  let fixture: ComponentFixture<WomenWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenWearComponent]
    });
    fixture = TestBed.createComponent(WomenWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
