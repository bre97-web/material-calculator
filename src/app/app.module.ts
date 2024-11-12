import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { CalculatorPageModule } from '@modules/calculator-page/calculator-page.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CalculatorPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
