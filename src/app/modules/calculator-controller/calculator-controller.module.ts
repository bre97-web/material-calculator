import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CalculatorInputDisplayComponent } from '../calculator-result/calculator-input-display/calculator-input-display.component'
import { StandardControllerComponent } from './components/standard-controller/standard-controller.component'
import { CalculatorInputService } from './services/calculator-input.service'



@NgModule({
  declarations: [
    StandardControllerComponent,
    CalculatorInputDisplayComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StandardControllerComponent,
    CalculatorInputDisplayComponent,
  ],
  providers: [
    CalculatorInputService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalculatorControllerModule { }
