import { Routes } from '@angular/router';
import { PlansLayoutComponent } from './core/components/plans-layout/plans-layout.component';

export const routes: Routes = [
    {
        path: 'plans',
        loadComponent: () => import('./core/components/plans-layout/plans-layout.component').then((m) => m.PlansLayoutComponent),
    }
];
