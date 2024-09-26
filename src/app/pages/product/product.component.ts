import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/global/navbar/navbar.component';
import { CartService } from '../../services/cart/cart.service';
import { PopupSuccessComponent } from '../../containers/global/popup-success/popup-success.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NavbarComponent, PopupSuccessComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent implements OnInit {
  product: any;
  selectedImage: string = "";
  itemsPerPage: number = 10;
  isPopupVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productService.getProduct(+productId).subscribe(data => {
        this.product = data;
        this.selectedImage = this.product.thumbnail; 
      });
    } 
  }

  changeImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    this.isPopupVisible = true;
    this.addPriceToStorage();
  }

  addPriceToStorage(): void {
    if(localStorage.getItem("totalPriceProducts")){
      const numberPriceProducts = Number(localStorage.getItem("totalPriceProducts")) + this.product.price;
      localStorage.setItem("totalPriceProducts", numberPriceProducts.toString());
    }else{
      localStorage.setItem("totalPriceProducts", this.product.price);
    }
  }
}
