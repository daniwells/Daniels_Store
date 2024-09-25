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
  amountItems: number = 0;

  constructor(private cartService: CartService) {
    this.returnAmountItems();
  }

  returnAmountItems(){
    let items = localStorage.getItem('cartItems');
    
    if(items){
      let itemsObj = JSON.parse(items);
      this.amountItems = itemsObj.length;
    }else{
      this.amountItems = 0;
    }
  }

  ngOnInit(): void {
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
