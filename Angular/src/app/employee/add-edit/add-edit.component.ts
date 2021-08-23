import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  ID: any;
  Name: any;
  Address: any;
  DoB: any;

  ngOnInit(): void {
    this.ID = this.emp.ID;
    this.Name = this.emp.Name;
    this.Address = this.emp.Address;
    this.DoB= this.emp.DoB;
  }

  addEmployee(){
    var val = {ID: this.ID,
               Name: this.Name,
               Address: this.Address,
               DoB : this.DoB };
    this.service.addEmployee(val).subscribe( e=>{
      alert(e.toString());
    });
  }


  updateEmployee(){
    var val = {ID: this.ID,
      Name: this.Name,
       Address: this.Address,
       DoB : this.DoB
     };
    this.service.updateEmployee(val.ID).subscribe( e=>
      { alert(e.toString());
    });

  }


}

