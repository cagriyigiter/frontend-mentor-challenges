import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'newbie',
    loadChildren: () =>
      import('../../components/newbie/newbie.module').then(
        (m) => m.NewbieModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../../components/home/home.module').then((m) => m.HomeModule),
  },
];
