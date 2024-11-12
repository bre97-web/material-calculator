import { Component, inject } from '@angular/core'
import { CalculatorHistoryService } from '@modules/calculator-history/services/calculator-history.service'

@Component({
  selector: 'calculator-history-history-list',
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.css'
})
export class HistoryListComponent {
  private historySercice = inject(CalculatorHistoryService)

  public get history() {
    return this.historySercice.history()
  }
}
