import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { ChangeThemeIconButtonComponent } from './components/change-theme-icon-button/change-theme-icon-button.component'
import { MaterialThemeService } from './services/material-theme.service'



@NgModule({
  declarations: [
    ChangeThemeIconButtonComponent,
  ],
  exports: [
    ChangeThemeIconButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MaterialThemeService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThemeModule { }
