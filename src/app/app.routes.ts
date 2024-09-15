import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'cadastro-paciente',
    loadComponent: () =>
      import(
        './components/patient-registration/patient-registration.component'
      ).then((m) => m.PatientRegistrationComponent),
  },
];
