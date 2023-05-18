import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-show-poduct-images-dialog',
  templateUrl: './show-poduct-images-dialog.component.html',
  styleUrls: ['./show-poduct-images-dialog.component.css']
})
export class ShowPoductImagesDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA)public data: any){

  }
  ngOnInit(): void {
    this.recieveImages();
  }


  recieveImages(){
    console.log(this.data);
  }
}
