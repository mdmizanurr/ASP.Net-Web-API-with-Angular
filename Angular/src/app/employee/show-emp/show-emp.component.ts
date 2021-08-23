import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList: any=[];
  ModalTitle: string ="";
  ActiveAddEditEmpComp: boolean=false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmployee();
  }

  addClick(){
    this.emp={
      ID:0,
      Name:"",
      Address:"",
      DoB: ""
    };
    this.ModalTitle="Add Employee";
    this.ActiveAddEditEmpComp=true;
  }

  editClick(e: any){
    this.emp=e;
    this.ModalTitle="Edit Employee";
    this.ActiveAddEditEmpComp=true;
  }


  deleteClick(e:any){
    if(confirm('Are you sure ?')){
      this.service.deleteEmployee(e.ID).subscribe(e =>{
        alert(e.toString());
        this.refreshEmployee();
      });
    }
  }

  closeClick(){
    this.ActiveAddEditEmpComp=false;
    this.refreshEmployee();
  }

  refreshEmployee(){
    this.service.getAllEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });


}
}
