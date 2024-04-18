import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

export const routes: Routes = [
    {path: '**', component: SideNavComponent},
    {
        path:'**', component: SideNavComponent,
           
    }
];
