import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
let zipFile: JSZip = new JSZip();
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos = [];
  counter = 0;
  TotalCounter = 0;
  total = 0;
  DownloadProgress = 0;
  constructor(private storage: AngularFireStorage,private http:HttpClient) { }

  ngOnInit(): void {
    
    // this.downloadZip()
  }
  LoadPhotos() {
    this.storage.ref("UserImages").listAll().subscribe((res)=>{
      this.TotalCounter = res.items.length;
     res.items.forEach((element,i) => {
     
       element.getDownloadURL().then((res)=>{
        this.loadSvgData(res);
       })
      
     });
   
    })
  }

  private loadSvgData(url: string) : void{
    this.http.get(url, { responseType: "arraybuffer" })
             .subscribe(x => {
              
              //  this.photos.push(x);
               this.counter++;
               zipFile.file("image"+this.counter+".jpg", x);
               this.total =this.counter * 100/this.TotalCounter;
            });
  }
  DownloadAll(){
    zipFile.generateAsync({ type: "blob" ,streamFiles:true},(metadata)=>{
      this.DownloadProgress = metadata.percent;
    })
       .then(blob => {
         saveAs(blob,'image.zip');
         this.counter = 0;
         this.TotalCounter = 0;
         this.total = 0;
         this.DownloadProgress = 0;
      })
       .catch(error=>console.log(error));
  }
update(metadata){
  console.log(metadata)
  // if(metadata)
  //  this.DownloadProgress = metadata.percent;
  

}

}
