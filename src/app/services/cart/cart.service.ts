import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = this.loadCartItems();

  addToCart(product: any): void {
    this.cartItems.push(product);
    this.saveCartItems();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.saveCartItems();
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems();
  }

  private saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private loadCartItems(): any[] {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }
}
