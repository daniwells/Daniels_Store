import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  @Output() searchTerm = new EventEmitter<string>();
  @Input() itemsCart: number = 0;
  activeUrl: string = "/";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeUrl = this.router.url;
    if (typeof window !== 'undefined' && window.localStorage) {
      let items = localStorage.getItem('cartItems');
      
      if (items) {
        let itemsObj = JSON.parse(items);
        this.itemsCart = itemsObj.length;
      } else {
        this.itemsCart = 0;
      }
    }
  }

  hoverIcons(component: any, path: string) {
    component.src = path;
  }

  redirect(url: string) {
    this.router.navigate([url]);
  }

  searchProduct(text: string | null) {
    if (text !== null && text !== undefined && text.trim() !== '') {
      this.searchTerm.emit(text);
    }
  }

  logout(){
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);  
    }
  }
}