import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWearComponent } from './men-wear.component';

describe('MenWearComponent', () => {
  let component: MenWearComponent;
  let fixture: ComponentFixture<MenWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenWearComponent]
    });
    fixture = TestBed.createComponent(MenWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
