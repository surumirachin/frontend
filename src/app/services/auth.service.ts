import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url: string = 'http://127.0.0.1:8000';
  constructor(private http:HttpClient) { }
  
  login(email: string, password: string){
    return this.http.post<any>(this.api_url + `/accounts/api/auth/`,
     { email, password}, httpOptions).pipe(
       map(user =>{
        console.log(user,'1111')
        if(user && user.token){
           localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
       })
       );
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
}
