import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'support', component: SupportComponent},
    { path: 'about', component: AboutComponent}
];
