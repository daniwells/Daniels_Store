import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"",
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "product/:id",
        component: ProductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "cart",
        component: CartComponent,
        canActivate: [AuthGuard]
    }
];