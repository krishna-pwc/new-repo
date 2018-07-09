import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  public tableHeaderDetails:any=[];
  public gridDetails:any=[];
  public tempgridDetails:any=[];
  public durationArray:any=[];
  public isEdit:boolean = false;
  constructor() { }

  ngOnInit() {
    this.tableHeaderDetails = ["Purpose","Meeting duration","Assigned to (email)","Actions"];
    this.gridDetails = [
      {purpose:"Making of wireframe",duration:"10 minutes",assignedto:"rahul@gmail.com"},
      {purpose:"Making of design",duration:"15 minutes",assignedto:"krish@gmail.com"}
    ];
    this.durationArray=["10 Minutes","15 Minutes","20 Minutes"];
  }
  public editRowDetail(rowIndex) {
    this.tempgridDetails = [];
    $("#editModal").modal('show');
    this.isEdit = true;
    this.tempgridDetails.push(this.gridDetails[rowIndex]);
  }
  public deleteRow(rowIndex) {
    if(this.gridDetails.splice(rowIndex,1)) {
    alert("Successfully deleted...");
    }
  }
  public saveRecord() {
    alert("Successfully saved!...");
    $("#editModal").modal('hide');
  }
}
