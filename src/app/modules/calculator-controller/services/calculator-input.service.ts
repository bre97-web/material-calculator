import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CalculatorInputService {

  public readonly input = signal<string>('')

  constructor() { }

  public push(word: string) {
    this.input.update(e => e + word)
  }

  public reset() {
    this.input.set('')
  }

  public backspace() {
    this.input.update(e => e.slice(0, e.length - 2))
  }
}
