import { Component, computed, HostListener, inject } from '@angular/core'
import { MaterialThemeService } from '@modules/theme/services/material-theme.service'

@Component({
  selector: 'theme-change-theme-icon-button',
  templateUrl: './change-theme-icon-button.component.html',
  styleUrl: './change-theme-icon-button.component.css'
})
export class ChangeThemeIconButtonComponent {
  private mdThemeService = inject(MaterialThemeService)

  public readonly darkStatusText = computed(() => this.mdThemeService.configuration().isDark ? 'light_mode' : 'dark_mode')

  @HostListener('click', ['$event'])
  private handleClick(e: Event) {
    this.mdThemeService.configuration.update(e => ({ ...e, isDark: !e.isDark }))
  }
}
