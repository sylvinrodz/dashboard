import { AngularFirestore } from '@angular/fire/firestore';
import { DataTableDirective } from 'angular-datatables';
import { environment } from './../../environments/environment.prod';
import { FirebaseService } from './../services/firebase.service';
import { SidebarService } from './../services/sidebar.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  @ViewChild('userReportData') userReportData: ElementRef;
  dtOptions: DataTables.Settings = {};
  persons = [];
  tables;
  selectValue = '2';
   headers = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private fs: FirebaseService, private firestore:AngularFirestore) { }

  ngOnInit(): void {
   
    this.tables = environment.tables;
    this.onSelect(this.selectValue);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  onSelect(selectValue){

 this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      destroy:true
    };

    this.headers = environment[this.tables[selectValue].headerName];
   
    this.firestore.collection(this.tables[selectValue].path , ref => 
     ref.orderBy(this.tables[selectValue].sortBy,this.tables[selectValue].order)).valueChanges().subscribe((res) => {

     
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        this.persons = res;
     
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
      
    });

  }
  DownloadUserReport(){
    
    let DATA = this.userReportData.nativeElement;
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(DATA);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */
    XLSX.writeFile(wb, environment.projectName+" Contact Us.xlsx");
  }
  logout(userID){
    var txt;
    var r = confirm("Are you sure, you want to logout this user?");
    if (r == true) {
       this.fs.logout(this.tables[this.selectValue].path,userID).catch(()=>{
      alert('something went wrong!');
    })
    }

   
  }

}
