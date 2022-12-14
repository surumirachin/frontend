import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeManagementTabComponent } from './admin-pages/employee-management-tab/employee-management-tab.component';
import { LeaveManagementTabComponent } from './admin-pages/leave-management-tab/leave-management-tab.component';
import { ApprovedleavesComponent } from './admin-pages/leave-management-tab/approvedleaves/approvedleaves.component';
import { PendingComponent } from './admin-pages/leave-management-tab/pending/pending.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    EmployeeComponent,
    AdminComponent,
    EmployeeManagementTabComponent,
    LeaveManagementTabComponent,
    ApprovedleavesComponent,
    PendingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
