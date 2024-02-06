import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  show_sidebar = false
  show_search = false

  toggle_sidebar() {
    this.show_sidebar = !this.show_sidebar;
    if (this.show_search) {
      this.show_search = false
    }
  }

  toggle_search() {
    this.show_search = !this.show_search;
    if (this.show_search) {
      this.show_sidebar = false
    }
  }
}
