import { Component, HostListener, inject } from '@angular/core'
import { NavigationDrawerService } from '../services/navigation-drawer.service'

@Component({
  selector: 'navigation-toggle-icon-button',
  templateUrl: './navigation-toggle-icon-button.component.html',
  styleUrl: './navigation-toggle-icon-button.component.css'
})
export class NavigationToggleIconButtonComponent {

  private navigationDrawerService = inject(NavigationDrawerService)

  @HostListener('click', ['$event'])
  private handleClick(e: Event) {
    this.navigationDrawerService.isOpen.update(e => !e)
  }
}
