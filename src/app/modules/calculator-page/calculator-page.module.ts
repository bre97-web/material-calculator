import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, RouterOutlet } from '@angular/router'
import { CalculatorControllerModule } from '@modules/calculator-controller/calculator-controller.module'
import { TopAppbarModule } from '@modules/top-appbar/top-appbar.module'
import { CalculatorHistoryModule } from "../calculator-history/calculator-history.module"
import { NavigationDrawerModule } from "../navigation-drawer/navigation-drawer.module"
import { ThemeModule } from "../theme/theme.module"
import { CalculatorPageRoutingModule } from './calculator-page-routing.module'
import { CalculatorLayoutComponent } from './layouts/calculator-layout/calculator-layout.component'
import { ProductRootLayoutComponent } from './layouts/product-root-layout/product-root-layout.component'
import { IndexComponent } from './pages/index/index.component'
import { StandardPageComponent } from './pages/standard-page/standard-page.component'



@NgModule({
  declarations: [
    IndexComponent,
    ProductRootLayoutComponent,
    CalculatorLayoutComponent,
    StandardPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterOutlet,
    CalculatorPageRoutingModule,
    TopAppbarModule,
    CalculatorControllerModule,
    NavigationDrawerModule,
    ThemeModule,
    CalculatorHistoryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalculatorPageModule { }
