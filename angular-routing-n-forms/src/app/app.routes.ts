import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Dashboard } from './dashboard/dashboard';
import { Overview } from './overview/overview';
import { Reports } from './reports/reports';
import { Settings } from './settings/settings';
import { Employees } from './employees/employees';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { EmployeeForm } from './employee-form/employee-form';
import { EmployeeFormReactive } from './employee-form-reactive/employee-form-reactive';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    //{path:'', component: Home},
    {path:'home', component: Home},
    {path:'about', component: About},
    {path:'contact', component: Contact},
    {path:'employees', component: Employees},
    {path:'employees/:id', component: EmployeeDetail},
    {path:'employees-reg', component: EmployeeForm},
    {path:'employees-reg-reactive', component: EmployeeFormReactive},
    {path:'dashboard', component: Dashboard,
        children: [
            {path:'', redirectTo: 'overview', pathMatch: 'full'},
            {path:'overview', component: Overview},
            {path:'reports', component: Reports },
            {path:'settings', component: Settings},
            {path:'**', component: PageNotFound},
        ]
    },
    {path:'**', component: PageNotFound},
];
