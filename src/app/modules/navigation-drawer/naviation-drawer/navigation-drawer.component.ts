import { AfterViewInit, Component, computed, ElementRef, inject, Input, ViewChild } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { Routes } from '@angular/router'
import { NavigationDrawerService } from '@modules/navigation-drawer/services/navigation-drawer.service'

@Component({
  selector: 'navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrl: './navigation-drawer.component.css',
  host: {
    '[attr.open]': 'isOpen()'
  }
})
export class NavigationDrawerComponent implements AfterViewInit {

  @Input()
  public routes!: Routes

  @Input()
  public headline!: string

  private drawerService = inject(NavigationDrawerService)

  @ViewChild('navDialog', { static: false, }) private readonly dialog!: ElementRef<HTMLDialogElement>
  @ViewChild('navScrim', { static: false, }) private readonly scrim!: ElementRef<HTMLElement>

  public isOpen = computed(() => this.drawerService.isOpen())
  private isOpenObservable = toObservable(this.drawerService.isOpen)

  constructor() {
    this.isOpenObservable.subscribe(this.handleDrawerServiceIsOpenChange)
  }

  ngAfterViewInit() {
    this.scrim.nativeElement.addEventListener('click', this.handleDialogClose)
    this.dialog.nativeElement.addEventListener('click', this.handleDialogClick)
  }

  private handleDrawerServiceIsOpenChange = (value: boolean) => {
    if (value) {
      this.dialog.nativeElement.show()
    } else {
      this.dialog.nativeElement.close()
    }
  }

  public handleDialogClose = () => {
    this.drawerService.isOpen.set(false)
  }

  private handleDialogClick = (e: Event) => {
    const target = e.target as HTMLElement
    if (!target.classList.contains('tab')) {
      return
    }
    this.handleDialogClose()
  }
}
