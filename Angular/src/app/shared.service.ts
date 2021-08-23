import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public APIUrl = "http://localhost:8080/api";



  constructor(private http:HttpClient) { }

  getAllEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employees')
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/employees',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/employees',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/employees/'+val)
  }

}
