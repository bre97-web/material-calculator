import { Component, inject } from '@angular/core'
import { CalculatorInputService } from '@modules/calculator-controller/services/calculator-input.service'
import { featureRoutes } from '@modules/calculator-page/calculator-page-routing.module'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  private inputService = inject(CalculatorInputService)

  public get input() {
    return this.inputService.input()
  }

  public get routes() {
    return featureRoutes
  }

  public openHistory = false
  public handleOpenHistoryOpen() {
    this.openHistory = true
  }
  public handleOpenHistoryClose() {
    this.openHistory = false
  }
}
