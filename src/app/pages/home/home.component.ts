import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/global/navbar/navbar.component';
import { ImageADContainerComponent } from '../../containers/home/image-adcontainer/image-adcontainer.component';
import { ContentContainerComponent } from '../../containers/home/content-container/content-container.component';
import { FiltersProductsContainerComponent } from '../../containers/home/filters-products-container/filters-products-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, 
    ImageADContainerComponent,  
    ContentContainerComponent,
    FiltersProductsContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  categoryCurrent: string = "";
  searchProduct: string = ""; 

  receiveCategory(category: any){
    this.categoryCurrent = category; 
  }

  receiveSearchProduct(searchProduct: string){
    this.searchProduct = searchProduct;
  }
}
