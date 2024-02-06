import { Component } from '@angular/core';
import { BannerTopComponent } from '../banner-top/banner-top.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BannerTopComponent, NavigationBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
