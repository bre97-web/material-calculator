import { Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class NavigationDrawerService {

    public readonly isOpen = signal(false)

    constructor() { }

}
