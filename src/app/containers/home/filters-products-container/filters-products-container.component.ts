import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductCategoryService } from '../../../services/home/product-category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters-products-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters-products-container.component.html',
  styleUrl: './filters-products-container.component.less'
})
export class FiltersProductsContainerComponent implements OnInit {
  categories: {name: string, slug: string, url: string}[] = [];
  @Output() categorySent = new EventEmitter<string>();

  constructor(private productCategoryService: ProductCategoryService) {}

  ngOnInit(): void {
    this.productCategoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.error('Erro ao carregar categorias!', error);
      }
    );
  }

  filterByCategory(category?: string){
    category &&
      this.categorySent.emit(category);
  }
}
