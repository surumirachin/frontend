import { Component } from '@angular/core';
import { EmplyoeeModel } from './employeedashboardmodal';
import { ApiService } from '../../service/api.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-management-tab',
  templateUrl: './employee-management-tab.component.html',
  styleUrls: ['./employee-management-tab.component.css']
})
export class EmployeeManagementTabComponent {

  formValue!: FormGroup
  employeeModelObj:EmplyoeeModel=new EmplyoeeModel();
  employeeData !:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  public submitted=false;
  constructor(private formbuilber: FormBuilder, private api: ApiService) { }

  EmployeeIdFilter:string="";

  EmployeeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
        full_name : ['',Validators.required],
        username:[''],
        password:[''],
        email: ['',[Validators.required, Validators.email]],
        contact_number : ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
        emergency_contact_number :['',[Validators.required,Validators.pattern('[0-9]{10}')]],
        position:['',[Validators.required,Validators.minLength(10)]],
        marital_status:['',[Validators.required,Validators.minLength(10)]],
        blood_group:['',[Validators.required,Validators.minLength(4)]],
        job_title:['',[Validators.required,Validators.minLength(10)]],
        work_location:['',[Validators.required]],
        reporting_to:[''],
        linkedin_link:[''],
        date_of_join:[''],
        dob:[''],

        // profile_pic:[''],
    })
    this.getAllEmployee();
  }
//   get Email() {
//     return this.formValue.get('email');
//  }
  onSubmit(){
    this.submitted=true;
    alert('111')
    console.log(this.formValue.controls,'qqqqqqqqqqqqqqqqqqqqq');
  }
  clickAddEmploye(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
 
  postEmployeeDetails() {
    this.submitted=true;

    this.employeeModelObj.full_name=this.formValue.value.full_name;
    this.employeeModelObj.username=this.formValue.value.username;
    this.employeeModelObj.password=this.formValue.value.password;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.contact_number=this.formValue.value.contact_number;
    this.employeeModelObj.emergency_contact_number=this.formValue.value.emergency_contact_number;
    this.employeeModelObj.position=this.formValue.value.position;
    this.employeeModelObj.marital_status=this.formValue.value.marital_status;
    this.employeeModelObj.blood_group=this.formValue.value.blood_group;
    this.employeeModelObj.job_title=this.formValue.value.job_title;
    this.employeeModelObj.work_location=this.formValue.value.work_location;
    this.employeeModelObj.date_of_join=this.formValue.value.date_of_join;
    this.employeeModelObj.reporting_to=this.formValue.value.reporting_to;
    this.employeeModelObj.linkedin_link=this.formValue.value.linkedin_link;
    this.employeeModelObj.dob=this.formValue.value.dob;
    // this.employeeModelObj.profile_pic=this.formValue.value.profile_pic;
    

    this.api.postEmployee(this.employeeModelObj)
     .subscribe(res=>{
    console.log(res);
 alert("Employee Added Succesfully")
    
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
  },
      err=>{
      alert("Something went wrong");
    })
  
}
getAllEmployee()
{
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData= res;
  })
}
 deleteEmployee(row : any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted")
    this.getAllEmployee();
  })
}
onEdit(row:any){
  
  this.showAdd=false;
  this.showUpdate=true;
  this.employeeModelObj.id=row.id;
  this.formValue.controls['full_name'].setValue(row.full_name);
  this.formValue.controls['username'].setValue(row.username);
  this.formValue.controls['password'].setValue(row.password);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['contact_number'].setValue(row.contact_number);
  this.formValue.controls['emergency_contact_number'].setValue(row.emergency_contact_number);
  this.formValue.controls['position'].setValue(row.position);
  this.formValue.controls['marital_status'].setValue(row.marital_status);
  this.formValue.controls['blood_group'].setValue(row.blood_group);
  this.formValue.controls['job_title'].setValue(row.job_title);
  this.formValue.controls['work_location'].setValue(row.work_location);
  this.formValue.controls['date_of_join'].setValue(row.date_of_join);
  this.formValue.controls['reporting_to'].setValue(row.reporting_to);
  this.formValue.controls['linkedin_link'].setValue(row.linkedin_link);
  this.formValue.controls['dob'].setValue(row.dob);
  // this.formValue.controls['profile_pic'].setValue(row.profile_pic);
  
}
updateEmployeeDetails(){

  this.employeeModelObj.full_name=this.formValue.value.full_name; 
  this.employeeModelObj.username=this.formValue.value.username; 
  this.employeeModelObj.password=this.formValue.value.password; 
  this.employeeModelObj.email=this.formValue.value.email;
  this.employeeModelObj.contact_number=this.formValue.value.contact_number;
  this.employeeModelObj.emergency_contact_number=this.formValue.value.emergency_contact_number;
  this.employeeModelObj.position=this.formValue.value.position;
  this.employeeModelObj.marital_status=this.formValue.value.marital_status;
  this.employeeModelObj.blood_group=this.formValue.value.blood_group;
  this.employeeModelObj.job_title=this.formValue.value.JobTitle;
  this.employeeModelObj.work_location=this.formValue.value.work_location;
  this.employeeModelObj.date_of_join=this.formValue.value.date_of_join;
  this.employeeModelObj.reporting_to=this.formValue.value.reporting_to;
  this.employeeModelObj.linkedin_link=this.formValue.value.linkedin_link;
  this.employeeModelObj.dob=this.formValue.value.dob;
  // this.employeeModelObj.profile_pic=this.formValue.value.profile_pic;
  

  this.api.upDateEmployee(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>
    {
      alert("Updated Successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
    
}

FilterFn(){
  var EmployeeIdFilter = this.EmployeeIdFilter;
  
  this.employeeData = this.EmployeeListWithoutFilter.filter(function  (el:any){
      return el.full_name.toString().toLowerCase().includes(
        EmployeeIdFilter.toString().trim().toLowerCase())
     
  });
}
sortResult(prop:any,asc:any){
  this.employeeData = this.EmployeeListWithoutFilter.sort(function(a:any,b:any){
    if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  })
}

get f() {
  return this.formValue.controls;
}

}


