import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementTabComponent } from './admin-pages/employee-management-tab/employee-management-tab.component';
import { ApprovedleavesComponent } from './admin-pages/leave-management-tab/approvedleaves/approvedleaves.component';
import { LeaveManagementTabComponent } from './admin-pages/leave-management-tab/leave-management-tab.component';
import { PendingComponent } from './admin-pages/leave-management-tab/pending/pending.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'login', component : LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'profile',component : ProfileComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'empmanage',component:EmployeeManagementTabComponent},
  {path:'leave',component:LeaveManagementTabComponent},
  {path:'approved',component:ApprovedleavesComponent},
  {path:'pending',component:PendingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
