import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ToDoList } from './components/to-do-list/to-do-list';
import { ToDoDetail } from './components/to-do-detail/to-do-detail';
import { ToDoCreateTask } from './components/to-do-create-task/to-do-create-task';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home},    
    {path:'toDoList', component: ToDoList},    
    {path:'toDoDetail', component: ToDoDetail},    
    {path:'toDoCreateTask', component: ToDoCreateTask},
    {path:'**', component: Home}    
];
