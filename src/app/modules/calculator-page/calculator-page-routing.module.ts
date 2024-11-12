import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './pages/index/index.component'
import { StandardPageComponent } from './pages/standard-page/standard-page.component'

export const featureRoutes: Routes = [
    {
        path: 'standard',
        component: StandardPageComponent,
        title: 'Standard'
    },
]

const routes: Routes = [
    {
        path: 'feature',
        component: IndexComponent,
        children: featureRoutes,
    },
    {
        path: '**',
        redirectTo: '/feature/standard'
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class CalculatorPageRoutingModule { }
