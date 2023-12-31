import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteConfirmationComponent } from './product-delete-confirmation.component';

describe('ProductDeleteConfirmationComponent', () => {
  let component: ProductDeleteConfirmationComponent;
  let fixture: ComponentFixture<ProductDeleteConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDeleteConfirmationComponent]
    });
    fixture = TestBed.createComponent(ProductDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
