import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/global/navbar/navbar.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent implements OnInit {
  product: any;
  selectedImage: string = "";
  itemsPerPage: number = 10;

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
        console.log(this.product)
      });
    } 
  }

  changeImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    alert('Produto adicionado ao carrinho!');
  }
}
