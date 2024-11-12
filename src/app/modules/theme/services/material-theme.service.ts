import { Injectable, signal } from '@angular/core'
import { EMaterialVariant, MaterialTokens } from '@glare-labs/material-tokens-generator'
import { Hct } from '@material/material-color-utilities'

@Injectable({
  providedIn: 'root'
})
export class MaterialThemeService {

  public readonly configuration = signal({
    isDark: false,
    hctRaw: {
      hue: 195,
      chroma: 50,
      tone: 55,
    }
  })


  constructor() { }

  public generate() {
    const { isDark, hctRaw } = this.configuration()
    const md = new MaterialTokens(Hct.from(hctRaw.hue, hctRaw.chroma, hctRaw.tone), {
      isDark,
      variant: EMaterialVariant.Fidelity
    })
    return `:root {${md.cssText()}}`
  }
}
