import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbyIdComponent } from './productby-id.component';

describe('ProductbyIdComponent', () => {
  let component: ProductbyIdComponent;
  let fixture: ComponentFixture<ProductbyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductbyIdComponent]
    });
    fixture = TestBed.createComponent(ProductbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
