import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-unidentified',
  templateUrl: './add-unidentified.component.html',
  styleUrls: ['./add-unidentified.component.css']
})
export class AddUnidentifiedComponent implements OnInit {
  images = [
  ];
  constructor() { }

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.length > 0) {
      var reader = new FileReader();
      reader.onload = function (e : any) {
        // upload image to server

        return e.target.result;
      }
      reader.readAsDataURL(fileInput[0]);
    }
  }

  uploadFile(event: any) {
    let imageUrl = this.fileChangeEvent(event); 
    this.images.push('/assets/images/component.png');
    console.log(this.images);
  }

  deleteAttachment(index: any) {
    this.images.splice(index, 1)
  }
}
