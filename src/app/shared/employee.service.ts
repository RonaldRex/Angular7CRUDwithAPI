import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 export class EmployeeService {
 formData:Employee;
 list:Employee[];
 readonly rootURL="https://localhost:44343/api"
 constructor(private http:HttpClient) { }
  
  postEmployee(formData:Employee){
   return this.http.post(this.rootURL+'/Employees',formData);
  }
   refreshList(){
   this.http.get(this.rootURL+'/Employees')
  .toPromise().then(res=>this.list=res as Employee[]);
   }
}
