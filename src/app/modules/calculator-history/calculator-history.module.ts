import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { HistoryListComponent } from './components/history-list/history-list.component'
import { ShowHistoryButtonComponent } from './components/show-history-button/show-history-button.component'
import { CalculatorHistoryService } from './services/calculator-history.service'



@NgModule({
  declarations: [
    ShowHistoryButtonComponent,
    HistoryListComponent,
  ],
  exports: [
    ShowHistoryButtonComponent,
    HistoryListComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CalculatorHistoryService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalculatorHistoryModule { }
