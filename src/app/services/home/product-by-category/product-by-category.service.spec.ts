import { TestBed } from '@angular/core/testing';

import { ProductByCategoryService } from './product-by-category.service';

describe('ProductByCategoryService', () => {
  let service: ProductByCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductByCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
