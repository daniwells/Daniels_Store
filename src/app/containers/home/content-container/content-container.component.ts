import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../components/home/pagination/pagination.component';
import { ProductByCategoryService } from '../../../services/home/product-by-category/product-by-category.service';

@Component({
  selector: 'app-content-container',
  standalone: true,
  imports: [PaginationComponent, CommonModule],
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.less'
})
export class ContentContainerComponent {
  products?: any = [{}]
  productsPerPage: number = 30;
  @Input() categoryCurrent: string = "";

  constructor(private router: Router, private productService: ProductByCategoryService) {
    this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryCurrent'] && changes['categoryCurrent'].currentValue) {
      console.log(this.categoryCurrent)
      if(this.categoryCurrent != "All"){
        this.loadProductsByCategory(changes['categoryCurrent'].currentValue);
      }else{
        this.getProducts();
      }
    }
  }

  loadProductsByCategory(category: string) {
    this.productService.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data.products;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  getProducts(){
    fetch(`https://dummyjson.com/products?limit=${this.productsPerPage}`)
    .then(res => res.json())
    .then((data) => {
        this.products = data.products;
      }
    );  
  }

  redirect(url: string){
    this.router.navigate([url]);
  }

  receivePages(pages: any) {
    this.productsPerPage = pages;
    this.getProducts();
  }
}
