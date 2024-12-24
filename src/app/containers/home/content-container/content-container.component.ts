import { Component, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../components/home/pagination/pagination.component';
import { ProductByCategoryService } from '../../../services/home/product-by-category/product-by-category.service';
import { ProductByTextService } from '../../../services/home/product-by-text/product-by-text.service';

@Component({
  selector: 'app-content-container',
  standalone: true,
  imports: [PaginationComponent, CommonModule],
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.less'
})
export class ContentContainerComponent implements OnInit {
  products?: any = [{}];
  productsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 196 ;
  
  @Input() categoryCurrent: string = "";
  @Input() searchProduct: string = "";

  constructor(
    private router: Router, 
    private productService: ProductByCategoryService,
    private productByTextService: ProductByTextService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.productsPerPage = this.presetProductsPerPage();
  }
  
  ngOnChanges(changes: SimpleChanges, changeProduct: SimpleChanges): void {
    if (changes['categoryCurrent'] && changes['categoryCurrent'].currentValue) {
      if(this.categoryCurrent != "All"){
        this.loadProductsByCategory(changes['categoryCurrent'].currentValue);
      }else{
        this.getProducts();
      }
    }

    if (changes['searchProduct']) {
      this.getProductsByText(this.searchProduct);
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
    const skip = (this.currentPage - 1) * this.productsPerPage;

    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${this.productsPerPage ? this.productsPerPage : 10}`)
    .then(res => res.json())
    .then((data) => {
        this.products = data.products;
      }
    );
  }

  getProductsByText(text: string) {
    this.productByTextService.getProducts(text).subscribe(
      (data) => {
        this.products = data.products;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  redirect(url: string){
    this.router.navigate([url]);
  }

  presetProductsPerPage(){
    return 10;
  }

  receivePages(pages: {'pages':number, 'currentPage':number}) {
    this.productsPerPage = pages.pages;
    this.currentPage = pages.currentPage;
    
    this.getProducts();
  }
}
