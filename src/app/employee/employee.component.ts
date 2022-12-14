import { Component } from '@angular/core';
import { EmplyoeeModel } from './employeedashboardmodal';
import { ApiService } from '../service/api.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  formValue!: FormGroup
  employeeModelObj:EmplyoeeModel=new EmplyoeeModel();
  employeeData !:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private formbuilber: FormBuilder, private api: ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
        employee_name : ['',Validators.required],
        apply_date:[''],
        nature_of_leave:[''],
        first_day: [''],
        last_day:[''],
        number_of_days:[''],
        status:[''],
       
    })
    this.getAllEmployee();
  }
  onSubmit(){
    alert('111')
    console.log(this.formValue.controls,'qqqqqqqqqqqqqqqqqqqqq');
  }
  clickAddLeave(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
 
  postLeave() {

    this.employeeModelObj.employee_name=this.formValue.value.employee_name;
    this.employeeModelObj.apply_date=this.formValue.value.apply_date;
    this.employeeModelObj.nature_of_leave=this.formValue.value.nature_of_leave;
    this.employeeModelObj.first_day=this.formValue.value.first_day;
    this.employeeModelObj.last_day=this.formValue.value.last_day;
    this.employeeModelObj.number_of_days=this.formValue.value.number_of_days;
    this.employeeModelObj.status=this.formValue.value.status;
    
    this.api.postLeave(this.employeeModelObj)
     .subscribe(res=>{
    console.log(res);
 alert("Leave Applied Succesfully")
    
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
  this.api.getLeave()
  .subscribe(res=>{
    this.employeeData= res;
  })
}
 deleteLeave(row : any){
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
  this.formValue.controls['employee_name'].setValue(row.employee_name);
  this.formValue.controls['apply_date'].setValue(row.apply_date);
  this.formValue.controls['nature_of_leave'].setValue(row.nature_of_leave);
  this.formValue.controls['first_day'].setValue(row.first_day);
  this.formValue.controls['last_day'].setValue(row.last_day);
  this.formValue.controls['number_of_days'].setValue(row.number_of_days);
  this.formValue.controls['status'].setValue(row.status);

}
updateLeave(){

  this.employeeModelObj.employee_name=this.formValue.value.full_name; 
  this.employeeModelObj.apply_date=this.formValue.value.username; 
  this.employeeModelObj.nature_of_leave=this.formValue.value.password; 
  this.employeeModelObj.first_day=this.formValue.value.email;
  this.employeeModelObj.last_day=this.formValue.value.contact_number;
  this.employeeModelObj.number_of_days=this.formValue.value.emergency_contact_number;
  this.employeeModelObj.status=this.formValue.value.position;
  

  this.api.upDateLeave(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>
    {
      alert("Updated Successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })

}

}
