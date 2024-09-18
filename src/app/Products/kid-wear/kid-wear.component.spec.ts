import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidWearComponent } from './kid-wear.component';

describe('KidWearComponent', () => {
  let component: KidWearComponent;
  let fixture: ComponentFixture<KidWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidWearComponent]
    });
    fixture = TestBed.createComponent(KidWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
