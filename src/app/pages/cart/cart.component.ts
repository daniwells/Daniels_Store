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
  totalPriceProducts: string = '0';
  itemsCart: number = 999;

  constructor(private cartService: CartService) {
    this.returnAmountItems();
    this.returnTotalPriceItems();
  }

  returnAmountItems(){
    let items = localStorage.getItem("cartItems");
    if(items){
      let itemsObj = JSON.parse(items);
      this.amountItems = itemsObj.length;
    }else{
      this.amountItems = 0;
    }
  }

  returnTotalPriceItems(){
    let totalPrice = localStorage.getItem('totalPriceProducts');
    
    if(totalPrice){
      let totalPriceObj = JSON.parse(totalPrice);
      this.totalPriceProducts = totalPriceObj.toFixed(2);
    }else{
      this.totalPriceProducts = '0';
    }
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(productId: number, productPrice: number): void {
    this.removeFromTotalPrice(productPrice);
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();

    const cart = localStorage.getItem('cartItems');

    if(cart){
      this.itemsCart = JSON.parse(cart).length
    }
  }

  removeFromTotalPrice(productPrice: number){
    const totalPriceProductsStorage = Number(localStorage.getItem('totalPriceProducts'));
    localStorage.setItem('totalPriceProducts', (totalPriceProductsStorage - productPrice).toString());

    this.returnTotalPriceItems();
  }

  removeAllTotalPrice(){
    localStorage.setItem('totalPriceProducts', '0');
    this.returnTotalPriceItems();
  }

  clearCart(): void {
    this.removeAllTotalPrice();
    this.cartService.clearCart();
    this.cartItems = [];
    this.returnAmountItems(); 
  }

  hoverIcons(component: any,path: string){
    component.src = path;
  }
}
