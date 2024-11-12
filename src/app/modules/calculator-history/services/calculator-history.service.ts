import { Injectable, signal } from '@angular/core'
import { CalculatorHistory } from '../interface/calculator-history'

@Injectable({
  providedIn: 'root'
})
export class CalculatorHistoryService {

  public readonly history = signal<Array<CalculatorHistory>>([])

  constructor() { }

  public push(historyField: CalculatorHistory) {
    this.history.update(e => [...e, historyField])
  }

  public empty() {
    this.history.set([])
  }
}
