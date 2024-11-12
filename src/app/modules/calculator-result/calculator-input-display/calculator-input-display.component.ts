import { Component, Input } from '@angular/core'

@Component({
  selector: 'calculator-controller-calculator-input-display',
  templateUrl: './calculator-input-display.component.html',
  styleUrl: './calculator-input-display.component.css',
  host: {
    '[attr.no-input]': 'input.length === 0',
    '[class.md-typescale-headline-large]': 'true'
  }
})
export class CalculatorInputDisplayComponent {
  @Input()
  public input!: string
}
