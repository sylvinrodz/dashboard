import { DataTableDirective } from 'angular-datatables';
import { environment } from './../../environments/environment.prod';
import { FirebaseService } from './../services/firebase.service';
import { SidebarService } from './../services/sidebar.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-uploaded-user',
  templateUrl: './uploaded-user.component.html',
  styleUrls: ['./uploaded-user.component.css']
})
export class UploadedUserComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  @ViewChild('userReportData') userReportData: ElementRef;
  dtOptions: DataTables.Settings = {};
  persons = [];
  tables;
  selectValue = '1';
   headers = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private fs: FirebaseService) { }

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
      processing: true
    };

    this.headers = environment[this.tables[selectValue].headerName];
   
    this.fs.getUser(this.tables[selectValue].path, this.tables[selectValue].sortBy, this.tables[selectValue].order).subscribe((res) => {

     
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        this.persons = res;
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
      
    });
    localStorage.setItem('selectValue',selectValue);

  }
  DownloadUserReport(){
    
    let DATA = this.userReportData.nativeElement;
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(DATA);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, environment.projectName+" User.xlsx");
  }
  enable(userID){
    
       this.fs.logout(this.tables[this.selectValue].path,userID).catch(()=>{
      alert('something went wrong!');
 
    })

   
  }
  openImage(img){
    console.log(img)
    window.open(img);
  }

}
