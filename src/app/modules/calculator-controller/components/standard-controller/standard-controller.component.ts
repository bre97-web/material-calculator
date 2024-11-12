import { Component, HostListener, inject } from '@angular/core'
import { CalculatorInputService } from '@modules/calculator-controller/services/calculator-input.service'
import { CalculatorHistoryService } from '@modules/calculator-history/services/calculator-history.service'
import { CalculatorService } from '@services/calculator.service'

@Component({
  selector: 'calculator-controller-standard-controller',
  templateUrl: './standard-controller.component.html',
  styleUrl: './standard-controller.component.css'
})
export class StandardControllerComponent {

  private calculatorInputService = inject(CalculatorInputService)
  private historyService = inject(CalculatorHistoryService)
  private calculatorService = inject(CalculatorService)

  @HostListener('click', ['$event'])
  private handleClick = (e: Event) => {
    const target = e.target as HTMLElement

    if (!target.classList.contains('rpn-operation')) {
      return
    }

    const currentInput = target.textContent!

    this.calculatorInputService.push(currentInput)
  }

  public handleEqualsClick() {
    const expression = this.calculatorInputService.input()
    const rpn = this.calculatorService.toRPN(expression)
    const result = this.calculatorService.evaluator(rpn).toString()
    this.calculatorInputService.input.set(result)
    this.historyService.push({
      expression,
      result,
    })
  }


  public handleReset() {
    this.calculatorInputService.reset()
  }

  public handleBackspace() {
    this.calculatorInputService.backspace()
  }
}
