import { AfterViewInit, Component, inject } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { MaterialThemeService } from '@modules/theme/services/material-theme.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {

    private mdTheme = inject(MaterialThemeService)

    constructor() {
        toObservable(this.mdTheme.configuration).subscribe(() => {
            const sheet = new CSSStyleSheet()
            sheet.replaceSync(this.mdTheme.generate())
            document.adoptedStyleSheets = [sheet]
        })
    }

    ngAfterViewInit(): void {

    }

}
