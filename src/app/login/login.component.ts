import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import{ first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  myform !: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void{
    this.myform = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

  }

  get f() {
    return this.myform.controls;
  }

  onSubmit() {
    this.authService.login(this.myform.value.email, this.myform.value.password).pipe(first()).subscribe(
      data =>{
    console.log(data,'3')

        if(data.admin == true)
        {
        this.router.navigate(['admin'])
          console.log(data,'1');
          
        }
        else{
          this.router.navigate(['employee'])
          console.log(data,'2');
          
        }
      }
    )
  }
}
