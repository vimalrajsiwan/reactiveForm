import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent} from './component/notfound/notfound.component';
import { ReactiveFormComponent } from './component/reactiveForm/reactiveForm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  // { path: 'register',   component: RegisterComponent },
  // { path: 'employee/:id',canActivate: [AuthGuardGuard], component: EmployeeAccordionComponent },
  // { path: 'cascade',    canActivate: [AuthGuardGuard], component: CascadeDropDownComponent },
  // { path: 'collapse',   canActivate: [AuthGuardGuard], component: CollapseExampleComponent },
  // { path: 'product',    canActivate: [AuthGuardGuard], component: ProductInsertComponent },
  // { path: 'dashboard',  canActivate: [AuthGuardGuard], component: DashboardComponent },
  // { path: 'productList',canActivate: [AuthGuardGuard], component: ProductListComponent },
  // { path: 'upload',     canActivate: [AuthGuardGuard], component: UpLoadComponent },
  // { path: 'editorTemplate',canActivate: [AuthGuardGuard], component: EditorTemplateComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
