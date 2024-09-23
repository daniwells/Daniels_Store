import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"",
        component: HomeComponent
    },
    {
        path: "product/:id",
        component: ProductComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
];