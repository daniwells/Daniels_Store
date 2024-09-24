import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersProductsContainerComponent } from './filters-products-container.component';

describe('FiltersProductsContainerComponent', () => {
  let component: FiltersProductsContainerComponent;
  let fixture: ComponentFixture<FiltersProductsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersProductsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersProductsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
