import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-login',
  standalone: true,
  imports: [],
  templateUrl: './background-login.component.html',
  styleUrl: './background-login.component.less'
})

export class BackgroundLoginComponent implements OnInit {
  productsImages: string[] = []; 
  
  ngOnInit() {
    this.executeJavaScript();
    this.getImagesDummy();
  }

  getImagesDummy(){
    fetch('https://dummyjson.com/products?limit=24', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => {
      data.products.map((product: any) => {
        this.productsImages.push(product.images[0]);
      })
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
  }

  executeJavaScript() {
    if (typeof document !== 'undefined') {
      document.addEventListener("mousemove", parallax);
    }
    
    function parallax(e: MouseEvent) {
      const objects = document.querySelectorAll<HTMLElement>(".object");
      objects.forEach((move) => {
          const tagName = move.tagName;
          const movingValue = move.getAttribute("data-value");
  
          if (movingValue) {
            const x = (e.clientX * parseFloat(movingValue)) / 250;
            const y = (e.clientY * parseFloat(movingValue)) / 250;

            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
          }
      });
    }
    
  }
}
