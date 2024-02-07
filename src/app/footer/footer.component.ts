import { Component } from '@angular/core';
import { BannerBottomComponent } from '../banner-bottom/banner-bottom.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NewsletterComponent, BannerBottomComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
