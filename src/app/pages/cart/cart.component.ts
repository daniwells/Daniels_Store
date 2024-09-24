import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { NavbarComponent } from '../../components/global/navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    let items = localStorage.getItem('cartItems');
    console.log(items)
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  hoverIcons(component: any,path: string){
    component.src = path;
  }
}
