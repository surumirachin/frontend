import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly APIUrl = "http://127.0.0.1:8000/accounts/"
  // readonly PhotoUrl ="http://127.0.0.1:8000/accounts/save/"
  constructor(private http : HttpClient) { }

  postEmployee(data : any){
  
    return this.http.post<any>("http://127.0.0.1:8000/accounts/employee/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getEmployee(){
    
    return this.http.get<any>("http://127.0.0.1:8000/accounts/employee/",)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  upDateEmployee(data : any, id :number){
    // return this.http.put(this.APIUrl + '/employee/'+id,data)
    return this.http.patch<any>("http://127.0.0.1:8000/accounts/employee/"+id +"/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  
  }
  deleteEmployee(id : number){
    // return this.http.delete(this.APIUrl + '/employee/'+ id);
    return this.http.delete<any>("http://127.0.0.1:8000/accounts/employee/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))

  }

  postLeave(data : any){
  
    return this.http.post<any>("http://127.0.0.1:8000/accounts/leave/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getLeave(){
    
    return this.http.get<any>("http://127.0.0.1:8000/accounts/leave/",)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  upDateLeave(data : any, id :number){
    // return this.http.put(this.APIUrl + '/employee/'+id,data)
    return this.http.patch<any>("http://127.0.0.1:8000/accounts/leave/"+id +"/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  
  }
  deleteLeave(id : number){
    // return this.http.delete(this.APIUrl + '/employee/'+ id);
    return this.http.delete<any>("http://127.0.0.1:8000/accounts/leave/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))

  }


}
