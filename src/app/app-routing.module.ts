import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirementApprovalComponent } from './requirement-approval/requirement-approval.component';
import { adminGuard, loginGuard } from './auth/admin.guard';
import { LoginComponent } from './auth/login/login.component';
import { RequirementViewComponent } from './requirement-view/requirement-view.component';

// map URL => Component

const routes: Routes = [
  { path: 'requirement-list', component: RequirementListComponent },
  { path: 'requirement-form', component: RequirementFormComponent,canDeactivate: [(component: RequirementFormComponent) => component.confirmLeaveForm()] },
  { path: 'requirement-form/:id', component: RequirementFormComponent,canDeactivate: [(component: RequirementFormComponent) => component.confirmLeaveForm()] },
  { path: 'requirement-view/:id', component: RequirementViewComponent},
  { path: 'requirement-approval', component: RequirementApprovalComponent, canActivate: [adminGuard] },
  {  path: 'login', component: LoginComponent, canActivate: [loginGuard] }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }