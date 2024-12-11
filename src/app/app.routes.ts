import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { AddEditEmployeesComponent } from './components/add-edit-employees/add-edit-employees.component';

export const routes: Routes = [
    { path: '', component: ListEmployeesComponent },
    { path: 'add', component: AddEditEmployeesComponent },
    { path: 'edit/:id', component: AddEditEmployeesComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
