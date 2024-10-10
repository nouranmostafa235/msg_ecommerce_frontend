import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSharedComponent } from './footer-shared.component';

describe('FooterSharedComponent', () => {
  let component: FooterSharedComponent;
  let fixture: ComponentFixture<FooterSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSharedComponent]
    });
    fixture = TestBed.createComponent(FooterSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
