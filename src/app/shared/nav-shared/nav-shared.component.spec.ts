import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSharedComponent } from './nav-shared.component';

describe('NavSharedComponent', () => {
  let component: NavSharedComponent;
  let fixture: ComponentFixture<NavSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSharedComponent]
    });
    fixture = TestBed.createComponent(NavSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
