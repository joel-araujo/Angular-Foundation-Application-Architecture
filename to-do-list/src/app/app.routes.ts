import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ToDoDetail } from './components/to-do-detail/to-do-detail';
import { ToDoCreateTask } from './components/to-do-create-task/to-do-create-task';

export const routes: Routes = [

  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component: Home},
  {path: 'toDoDetail',component: ToDoDetail},
  {path: 'toDoCreateTask',component: ToDoCreateTask},
  {path: '**',redirectTo: 'home'}

];