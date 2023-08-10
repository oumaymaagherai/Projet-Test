import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
 uploadedFile : any ; 
 fileProgresse : boolean = false ;
 onUploadFile(event : any){
  const file = event.target.files[0]; 
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async (event : any)=>{
    this.uploadedFile = {
      fileName : file.name ,
      fileType : file.type,
      
      fileUrl: event.target.result,
    }
  await this.fakeWaiter();
  this.fileProgresse = false ;

  }
 }
 
fakeWaiter() {
  return new Promise((resolve) => {
    this.fileProgresse = true ;
    setTimeout(resolve, 1500);

  });
}
}

