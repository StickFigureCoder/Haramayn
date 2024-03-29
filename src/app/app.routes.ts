import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'shop', component: ShopComponent},
    { path: "shop/:id", component: ProductDisplayComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'support', component: SupportComponent},
    { path: 'about', component: AboutComponent},
    { path: 'your-cart', component: YourCartComponent},
    { path: 'checkout', component: CheckoutComponent },
    { path: 'my-orders', component: MyOrdersComponent }
];
