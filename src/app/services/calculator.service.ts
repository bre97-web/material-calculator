import { Injectable } from '@angular/core'

const MathSymbols = {
    Addition: '+',
    Minus: '-',
    Multiplication: '*',
    Division: '/',
    Caret: '^',
} as const

type TMathSymbolKey = keyof typeof MathSymbols
type TMathSymbol = typeof MathSymbols[TMathSymbolKey]
type TAssoc = 'left' | 'right'

interface IOperatorInfo {
    prec: number
    assoc: TAssoc
}

@Injectable({
    providedIn: 'root',
})
export class CalculatorService {
    private operators: Record<TMathSymbol, IOperatorInfo> = {
        [MathSymbols.Caret]: { prec: 4, assoc: "right" },
        [MathSymbols.Multiplication]: { prec: 3, assoc: "left" },
        [MathSymbols.Division]: { prec: 3, assoc: "left" },
        [MathSymbols.Addition]: { prec: 2, assoc: "left" },
        [MathSymbols.Minus]: { prec: 2, assoc: "left" },
    };

    public evaluator(rpnExpression: string): number {
        const tokens = rpnExpression.split(' ')
        const stack: Array<number> = []

        for (const token of tokens) {
            if (!isNaN(parseFloat(token))) {
                stack.push(parseFloat(token))
            } else {
                const rightOperand = stack.pop()!
                const leftOperand = stack.pop()!

                switch (token) {
                    case MathSymbols.Addition:
                        stack.push(leftOperand + rightOperand)
                        break
                    case MathSymbols.Minus:
                        stack.push(leftOperand - rightOperand)
                        break
                    case MathSymbols.Multiplication:
                        stack.push(leftOperand * rightOperand)
                        break
                    case MathSymbols.Division:
                        stack.push(leftOperand / rightOperand)
                        break
                    case MathSymbols.Caret:
                        stack.push(leftOperand ** rightOperand)
                        break
                    default:
                        throw new Error(`Invalid operator: ${token}`)
                }
            }
        }

        if (stack.length !== 1) {
            throw new Error('Invalid RPN expression')
        }

        return stack[0]
    }

    private tokenize(input: string): string[] {
        const tokens: string[] = []
        let currentNumber = ''

        input = input.replace(/\s+/g, '')

        for (let i = 0; i < input.length; i++) {
            const char = input[i]

            if (/[0-9.]/.test(char)) {
                currentNumber += char
            } else if (char === '-' && (i === 0 || /[+\-*/^(]/.test(input[i - 1]))) {
                currentNumber += char
            } else {
                if (currentNumber) {
                    tokens.push(currentNumber)
                    currentNumber = ''
                }
                tokens.push(char)
            }
        }

        if (currentNumber) {
            tokens.push(currentNumber)
        }

        return tokens
    }

    public toRPN(input: string): string {
        const tokens = this.tokenize(input)
        const opSymbols = Object.keys(this.operators)
        const outputQueue: string[] = []
        const operatorStack: (string | TMathSymbol)[] = [] // Correct Type

        const peek = (): string | TMathSymbol | undefined => operatorStack[operatorStack.length - 1]

        for (const token of tokens) {
            if (!isNaN(parseFloat(token))) {
                outputQueue.push(token)
            } else if (opSymbols.includes(token)) {
                const o1 = token as TMathSymbol
                let o2 = peek() as TMathSymbol | '(' | undefined

                while (
                    o2 &&
                    o2 !== "(" &&
                    (this.operators[o2].prec > this.operators[o1].prec ||
                        (this.operators[o2].prec === this.operators[o1].prec &&
                            this.operators[o1].assoc === "left"))
                ) {
                    outputQueue.push(operatorStack.pop() as string)
                    o2 = peek() as TMathSymbol | undefined
                }
                operatorStack.push(o1)
            } else if (token === "(") {
                operatorStack.push(token)
            } else if (token === ")") {
                while (peek() !== "(") {
                    if (operatorStack.length === 0) {
                        throw new Error("Mismatched parentheses")
                    }
                    outputQueue.push(operatorStack.pop() as string)
                }
                operatorStack.pop() // Discard the "("
            } else {
                throw new Error(`Invalid token: ${token}`)
            }
        }

        while (operatorStack.length > 0) {
            const op = peek()
            if (op === "(") {
                throw new Error("Mismatched parentheses")
            }
            outputQueue.push(operatorStack.pop() as string)
        }

        return outputQueue.join(" ")
    }
}
