import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { TopAppbarComponent } from './top-appbar/top-appbar.component'



@NgModule({
  declarations: [
    TopAppbarComponent,
  ],
  exports: [
    TopAppbarComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopAppbarModule { }
