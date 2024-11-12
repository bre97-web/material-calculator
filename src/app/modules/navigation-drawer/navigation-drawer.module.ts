import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NavigationDrawerComponent } from './naviation-drawer/navigation-drawer.component'
import { NavigationToggleIconButtonComponent } from './navigation-toggle-icon-button/navigation-toggle-icon-button.component'
import { NavigationDrawerService } from './services/navigation-drawer.service'



@NgModule({
  declarations: [
    NavigationDrawerComponent,
    NavigationToggleIconButtonComponent,
  ],
  exports: [
    NavigationDrawerComponent,
    NavigationToggleIconButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  providers: [
    NavigationDrawerService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavigationDrawerModule { }
