import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  hoverIcons(component: any,path: string){
    component.src = path;
  }

  redirect(url: string){
    this.router.navigate([url]);
  }
}
