import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'newbie',
    loadChildren: () =>
      import('../../components/newbie/newbie.module').then(
        (m) => m.NewbieModule
      ),
  },
];
